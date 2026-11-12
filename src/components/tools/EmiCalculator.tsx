"use client";

import { useMemo, useState } from "react";
import RichText from "@/components/RichText";
import { fmt, localeInfo, type Locale } from "@/i18n/config";
import type { CommonDictionary } from "@/i18n/types";

type Text = CommonDictionary["ui"]["emi"];

const CURRENCIES = {
  INR: { min: 10000, max: 20000000, step: 10000, amount: "1000000", rate: "8.5", years: "20" },
  USD: { min: 1000, max: 2000000, step: 1000, amount: "250000", rate: "6.5", years: "30" },
  EUR: { min: 1000, max: 2000000, step: 1000, amount: "200000", rate: "3.5", years: "25" },
  GBP: { min: 1000, max: 2000000, step: 1000, amount: "200000", rate: "4.5", years: "25" },
  BRL: { min: 5000, max: 5000000, step: 5000, amount: "300000", rate: "10", years: "30" },
} as const;
type Currency = keyof typeof CURRENCIES;

/** The currency (and matching example loan) each language starts with. */
const DEFAULT_CURRENCY: Record<Locale, Currency> = {
  en: "INR",
  de: "EUR",
  fr: "EUR",
  es: "EUR",
  pt: "BRL",
  it: "EUR",
  nl: "EUR",
};

interface YearRow {
  year: number;
  principal: number;
  interest: number;
  balance: number;
}

/** Standard reducing-balance (annuity) formula: payment = P·r·(1+r)^n / ((1+r)^n − 1) */
export function calculateEmi(principal: number, annualRate: number, months: number) {
  const r = annualRate / 12 / 100;
  const emi = r === 0 ? principal / months : (principal * r * (1 + r) ** months) / ((1 + r) ** months - 1);

  const rows: YearRow[] = [];
  let balance = principal;
  let yearPrincipal = 0;
  let yearInterest = 0;
  for (let m = 1; m <= months; m++) {
    const interest = balance * r;
    const principalPart = m === months ? balance : emi - interest;
    balance = Math.max(0, balance - principalPart);
    yearPrincipal += principalPart;
    yearInterest += interest;
    if (m % 12 === 0 || m === months) {
      rows.push({ year: Math.ceil(m / 12), principal: yearPrincipal, interest: yearInterest, balance });
      yearPrincipal = 0;
      yearInterest = 0;
    }
  }
  const totalPayment = rows.reduce((sum, row) => sum + row.principal + row.interest, 0);
  return { emi, totalPayment, totalInterest: totalPayment - principal, rows };
}

export default function EmiCalculator({ t, locale }: { t: Text; locale: Locale }) {
  const initial = CURRENCIES[DEFAULT_CURRENCY[locale]];
  const [currency, setCurrency] = useState<Currency>(DEFAULT_CURRENCY[locale]);
  const [amount, setAmount] = useState<string>(initial.amount);
  const [rate, setRate] = useState<string>(initial.rate);
  const [tenure, setTenure] = useState<string>(initial.years);
  const [unit, setUnit] = useState<"years" | "months">("years");

  const cfg = CURRENCIES[currency];
  // Indian rupees use lakh grouping (10,00,000) and reais use Brazilian formatting; others follow the page language.
  const numberLocale = currency === "INR" ? "en-IN" : currency === "BRL" ? "pt-BR" : localeInfo[locale].intl;
  const money = useMemo(
    () => new Intl.NumberFormat(numberLocale, { style: "currency", currency, maximumFractionDigits: 0 }),
    [numberLocale, currency],
  );

  const P = Number(amount);
  const R = Number(rate);
  const months = Math.round(Number(tenure) * (unit === "years" ? 12 : 1));

  const errors: string[] = [];
  if (!(P > 0)) errors.push(t.errorAmount);
  if (rate === "" || !(R >= 0 && R <= 50)) errors.push(t.errorRate);
  if (!(months >= 1 && months <= 600)) errors.push(t.errorTenure);

  const isValid = errors.length === 0;
  const result = useMemo(() => (isValid ? calculateEmi(P, R, months) : null), [isValid, P, R, months]);
  const interestShare = result ? Math.round((result.totalInterest / result.totalPayment) * 100) : 0;

  return (
    <div className="space-y-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <div className="flex items-end justify-between gap-3">
            <label htmlFor="amount" className="label">
              {t.loanAmount}
            </label>
            <label htmlFor="currency" className="sr-only">
              {t.currency}
            </label>
            <select
              id="currency"
              value={currency}
              onChange={(e) => setCurrency(e.target.value as Currency)}
              className="mb-1.5 rounded-lg border border-border bg-surface px-2 py-1 text-sm text-text"
            >
              {Object.keys(CURRENCIES).map((code) => (
                <option key={code}>{code}</option>
              ))}
            </select>
          </div>
          <input
            id="amount"
            type="number"
            inputMode="decimal"
            min={0}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="input text-lg font-semibold"
          />
          <input
            type="range"
            aria-label={t.amountSlider}
            min={cfg.min}
            max={cfg.max}
            step={cfg.step}
            value={Math.min(Math.max(P || cfg.min, cfg.min), cfg.max)}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-3 w-full accent-brand"
          />
        </div>

        <div>
          <label htmlFor="rate" className="label">
            {t.interestRate}
          </label>
          <input
            id="rate"
            type="number"
            inputMode="decimal"
            step={0.05}
            min={0}
            max={50}
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="input text-lg font-semibold"
          />
          <input
            type="range"
            aria-label={t.rateSlider}
            min={1}
            max={30}
            step={0.05}
            value={Math.min(Math.max(R || 1, 1), 30)}
            onChange={(e) => setRate(e.target.value)}
            className="mt-3 w-full accent-brand"
          />
        </div>

        <div>
          <div className="flex items-end justify-between gap-3">
            <label htmlFor="tenure" className="label">
              {t.tenure}
            </label>
            <div className="mb-1.5 flex rounded-lg border border-border p-0.5 text-sm" role="group" aria-label={t.tenureUnit}>
              {(["years", "months"] as const).map((u) => (
                <button
                  key={u}
                  type="button"
                  aria-pressed={unit === u}
                  onClick={() => {
                    if (u === unit) return;
                    const n = Number(tenure);
                    if (n > 0) setTenure(String(u === "months" ? Math.round(n * 12) : +(n / 12).toFixed(2)));
                    setUnit(u);
                  }}
                  className={`rounded-md px-2.5 py-0.5 ${unit === u ? "bg-brand text-on-brand" : "text-muted"}`}
                >
                  {u === "years" ? t.years : t.months}
                </button>
              ))}
            </div>
          </div>
          <input
            id="tenure"
            type="number"
            inputMode="decimal"
            min={1}
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
            className="input text-lg font-semibold"
          />
          <input
            type="range"
            aria-label={t.tenureSlider}
            min={1}
            max={unit === "years" ? 30 : 360}
            step={1}
            value={Math.min(Math.max(Number(tenure) || 1, 1), unit === "years" ? 30 : 360)}
            onChange={(e) => setTenure(e.target.value)}
            className="mt-3 w-full accent-brand"
          />
        </div>
      </div>

      {errors.length > 0 && (
        <ul className="space-y-1 rounded-xl bg-danger-soft px-4 py-3 text-sm text-danger" role="alert">
          {errors.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      )}

      {result && (
        <>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-4" aria-live="polite">
            <div className="rounded-2xl bg-linear-to-br from-brand to-violet-600 p-5 text-white shadow-lg shadow-brand/25 sm:col-span-3 lg:col-span-1">
              <p className="text-sm font-medium opacity-85">{t.monthlyPayment}</p>
              <p className="mt-1 text-3xl font-bold tracking-tight">{money.format(result.emi)}</p>
            </div>
            <Stat label={t.principal} value={money.format(P)} />
            <Stat label={t.totalInterest} value={money.format(result.totalInterest)} />
            <Stat label={t.totalPayment} value={money.format(result.totalPayment)} />
          </div>
          <p className="text-sm text-muted [&_strong]:text-text">
            <RichText text={fmt(t.interestShare, { months, percent: interestShare })} />
          </p>

          <div>
            <h3 className="mb-3 font-semibold text-text">{t.schedule}</h3>
            <div className="max-h-96 overflow-auto rounded-2xl border border-border">
              <table className="w-full text-right text-sm tabular-nums">
                <thead className="sticky top-0 bg-surface-2 text-xs uppercase tracking-wide text-muted">
                  <tr>
                    <th className="px-4 py-2.5 text-left font-semibold">{t.year}</th>
                    <th className="px-4 py-2.5 font-semibold">{t.principalPaid}</th>
                    <th className="px-4 py-2.5 font-semibold">{t.interestPaid}</th>
                    <th className="px-4 py-2.5 font-semibold">{t.balance}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {result.rows.map((row) => (
                    <tr key={row.year}>
                      <td className="px-4 py-2 text-left font-medium text-text">{row.year}</td>
                      <td className="px-4 py-2 text-muted">{money.format(row.principal)}</td>
                      <td className="px-4 py-2 text-muted">{money.format(row.interest)}</td>
                      <td className="px-4 py-2 text-text">{money.format(row.balance)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border p-5">
      <p className="text-sm text-muted">{label}</p>
      <p className="mt-1 text-xl font-bold tracking-tight text-text">{value}</p>
    </div>
  );
}
