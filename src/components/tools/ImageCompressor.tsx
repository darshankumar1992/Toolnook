"use client";

import { useEffect, useRef, useState } from "react";
import { Download, Loader2, Trash2, X } from "lucide-react";
import DropZone from "./DropZone";
import { baseName, downloadBlob, formatBytes, uniqueId } from "@/lib/files";
import { fmt } from "@/i18n/config";
import type { CommonDictionary } from "@/i18n/types";

type Text = CommonDictionary["ui"]["imageCompressor"];
type CommonText = CommonDictionary["ui"]["common"];
type OutputFormat = "original" | "image/jpeg" | "image/webp" | "image/png";

const ACCEPT = "image/jpeg,image/png,image/webp";
const EXTENSIONS: Record<string, string> = { "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp" };

interface Source {
  id: string;
  file: File;
  previewUrl: string;
}

interface Result {
  settingsKey: string;
  status: "working" | "done" | "error";
  blob?: Blob;
  url?: string;
  width?: number;
  height?: number;
  /** True when the original file was already smaller than any re-encoded version. */
  kept?: boolean;
  error?: string;
}

class CompressError extends Error {}

function loadImage(file: File, t: Text): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new CompressError(t.errorRead));
    };
    img.src = url;
  });
}

async function compressImage(file: File, quality: number, format: OutputFormat, maxWidth: number, t: Text) {
  const img = await loadImage(file, t);
  let width = img.naturalWidth;
  let height = img.naturalHeight;
  if (maxWidth > 0 && width > maxWidth) {
    height = Math.round((height * maxWidth) / width);
    width = maxWidth;
  }

  const type = format === "original" ? file.type : format;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new CompressError(t.errorProcess);
  // JPG has no transparency; paint white so transparent areas don't turn black.
  if (type === "image/jpeg") {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, width, height);
  }
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(img, 0, 0, width, height);

  const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, type, quality / 100));
  if (!blob) throw new CompressError(t.errorFailed);

  const resized = width !== img.naturalWidth;
  if (!resized && blob.type === file.type && blob.size >= file.size) {
    return { blob: file as Blob, width, height, kept: true };
  }
  return { blob, width, height, kept: false };
}

export default function ImageCompressor({ t, c }: { t: Text; c: CommonText }) {
  const [sources, setSources] = useState<Source[]>([]);
  const [results, setResults] = useState<Record<string, Result>>({});
  const [quality, setQuality] = useState(70);
  const [format, setFormat] = useState<OutputFormat>("original");
  const [maxWidth, setMaxWidth] = useState("");
  /** Object URLs we created, so they can be released and don't leak memory. */
  const urls = useRef(new Map<string, string>());
  /** Settings each image was last compressed with, so unchanged images are skipped. */
  const doneKeys = useRef(new Map<string, string>());

  const parsedMaxWidth = Math.max(0, parseInt(maxWidth, 10) || 0);
  const settingsKey = `${quality}|${format}|${parsedMaxWidth}`;

  // Re-compress whenever images or settings change (debounced so the slider stays smooth).
  useEffect(() => {
    let cancelled = false;
    const timer = setTimeout(async () => {
      for (const source of sources) {
        if (cancelled) return;
        if (doneKeys.current.get(source.id) === settingsKey) continue;
        setResults((prev) => ({ ...prev, [source.id]: { ...prev[source.id], settingsKey, status: "working" } }));
        try {
          const r = await compressImage(source.file, quality, format, parsedMaxWidth, t);
          if (cancelled) return;
          const url = URL.createObjectURL(r.blob);
          const old = urls.current.get(source.id);
          if (old) URL.revokeObjectURL(old);
          urls.current.set(source.id, url);
          doneKeys.current.set(source.id, settingsKey);
          setResults((prev) => ({ ...prev, [source.id]: { settingsKey, status: "done", url, ...r } }));
        } catch (err) {
          if (cancelled) return;
          const error = err instanceof CompressError ? err.message : t.errorGeneric;
          doneKeys.current.set(source.id, settingsKey);
          setResults((prev) => ({ ...prev, [source.id]: { settingsKey, status: "error", error } }));
        }
      }
    }, 300);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
    // settingsKey already captures quality, format and max width.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sources, settingsKey]);

  // Release every object URL when leaving the page.
  useEffect(() => {
    const map = urls.current;
    return () => map.forEach((u) => URL.revokeObjectURL(u));
  }, []);

  function addFiles(files: File[]) {
    const added = files
      .filter((f) => ACCEPT.split(",").includes(f.type))
      .map((file) => {
        const id = uniqueId();
        const previewUrl = URL.createObjectURL(file);
        urls.current.set(`${id}:preview`, previewUrl);
        return { id, file, previewUrl };
      });
    setSources((prev) => [...prev, ...added]);
  }

  function removeSource(id: string) {
    for (const key of [id, `${id}:preview`]) {
      const u = urls.current.get(key);
      if (u) URL.revokeObjectURL(u);
      urls.current.delete(key);
    }
    doneKeys.current.delete(id);
    setSources((prev) => prev.filter((s) => s.id !== id));
    setResults((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  }

  function clearAll() {
    urls.current.forEach((u) => URL.revokeObjectURL(u));
    urls.current.clear();
    doneKeys.current.clear();
    setSources([]);
    setResults({});
  }

  function outputName(source: Source, result: Result) {
    if (result.kept) return source.file.name;
    return `${baseName(source.file.name)}-${t.fileSuffix}.${EXTENSIONS[result.blob!.type] ?? "img"}`;
  }

  async function downloadAll() {
    for (const s of sources) {
      const r = results[s.id];
      if (r?.status === "done" && r.blob) {
        downloadBlob(r.blob, outputName(s, r));
        await new Promise((resolve) => setTimeout(resolve, 250));
      }
    }
  }

  const done = sources.filter((s) => results[s.id]?.status === "done");
  const originalTotal = done.reduce((sum, s) => sum + s.file.size, 0);
  const compressedTotal = done.reduce((sum, s) => sum + (results[s.id].blob?.size ?? 0), 0);
  const savedPercent = originalTotal ? Math.round((1 - compressedTotal / originalTotal) * 100) : 0;
  const isWorking = sources.some((s) => results[s.id]?.status !== "done" && results[s.id]?.status !== "error");
  const pngOutput = format === "image/png" || (format === "original" && sources.some((s) => s.file.type === "image/png"));

  if (sources.length === 0) {
    return <DropZone accept={ACCEPT} title={t.dropTitle} hint={t.dropHint} onFiles={addFiles} />;
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label htmlFor="quality" className="label">
            {t.quality}: <span className="text-brand-text">{quality}%</span>
          </label>
          <input
            id="quality"
            type="range"
            min={10}
            max={100}
            step={5}
            value={quality}
            onChange={(e) => setQuality(Number(e.target.value))}
            className="mt-2 w-full accent-brand"
          />
          <p className="mt-1 text-xs text-muted">{t.qualityHint}</p>
        </div>
        <div>
          <label htmlFor="format" className="label">
            {t.outputFormat}
          </label>
          <select
            id="format"
            value={format}
            onChange={(e) => setFormat(e.target.value as OutputFormat)}
            className="input"
          >
            <option value="original">{t.formatOriginal}</option>
            <option value="image/jpeg">{t.formatJpg}</option>
            <option value="image/webp">{t.formatWebp}</option>
            <option value="image/png">{t.formatPng}</option>
          </select>
        </div>
        <div>
          <label htmlFor="max-width" className="label">
            {t.maxWidth}
          </label>
          <input
            id="max-width"
            type="number"
            inputMode="numeric"
            min={1}
            placeholder={t.maxWidthPlaceholder}
            value={maxWidth}
            onChange={(e) => setMaxWidth(e.target.value)}
            className="input"
          />
        </div>
      </div>

      {pngOutput && <p className="rounded-xl bg-warning-soft px-4 py-3 text-sm text-warning">{t.pngNotice}</p>}

      <ul className="divide-y divide-border rounded-2xl border border-border">
        {sources.map((s) => {
          const r = results[s.id];
          const saved = r?.blob ? Math.round((1 - r.blob.size / s.file.size) * 100) : 0;
          return (
            <li key={s.id} className="flex items-center gap-3 p-3 sm:gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element -- local blob preview */}
              <img src={s.previewUrl} alt="" className="size-12 shrink-0 rounded-lg object-cover sm:size-14" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-text">{s.file.name}</p>
                <p className="mt-0.5 text-sm text-muted">
                  {formatBytes(s.file.size)}
                  {r?.status === "done" && r.blob && (
                    <>
                      {" → "}
                      <span className="font-semibold text-text">{formatBytes(r.blob.size)}</span>
                      {r.width && (
                        <span className="hidden sm:inline">
                          {" "}
                          · {r.width}×{r.height}px
                        </span>
                      )}
                    </>
                  )}
                </p>
                {r?.status === "done" && r.kept && (
                  <p className="mt-0.5 text-xs text-muted sm:hidden">{t.alreadyOptimizedLong}</p>
                )}
                {r?.status === "error" && <p className="mt-0.5 text-sm text-danger">{r.error}</p>}
              </div>
              {r?.status === "done" &&
                (r.kept ? (
                  <span className="hidden rounded-full bg-surface-2 px-2.5 py-1 text-xs font-medium text-muted sm:inline">
                    {t.alreadyOptimized}
                  </span>
                ) : (
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-bold ${saved > 0 ? "bg-success-soft text-success" : "bg-surface-2 text-muted"}`}
                  >
                    {saved > 0 ? `−${saved}%` : `+${Math.abs(saved)}%`}
                  </span>
                ))}
              {(!r || r.status === "working") && (
                <Loader2 className="size-5 animate-spin text-muted" aria-label={t.compressing} />
              )}
              {r?.status === "done" && r.blob && (
                <button
                  type="button"
                  onClick={() => downloadBlob(r.blob!, outputName(s, r))}
                  className="btn-secondary px-3"
                  aria-label={fmt(t.downloadFile, { name: s.file.name })}
                >
                  <Download className="size-4" aria-hidden />
                  <span className="hidden sm:inline">{c.download}</span>
                </button>
              )}
              <button
                type="button"
                onClick={() => removeSource(s.id)}
                className="rounded-lg p-2 text-muted hover:bg-surface-2 hover:text-text"
                aria-label={fmt(c.remove, { name: s.file.name })}
              >
                <X className="size-4" aria-hidden />
              </button>
            </li>
          );
        })}
      </ul>

      <DropZone accept={ACCEPT} compact title={t.addMore} hint={c.addMoreHint} onFiles={addFiles} />

      <div className="flex flex-col items-start justify-between gap-4 rounded-2xl bg-surface-2 p-4 sm:flex-row sm:items-center">
        <p className="text-sm text-muted" aria-live="polite">
          {isWorking ? (
            t.compressing
          ) : originalTotal > 0 ? (
            <>
              {t.total} {formatBytes(originalTotal)} → <strong className="text-text">{formatBytes(compressedTotal)}</strong>
              {savedPercent > 0 && (
                <span className="font-semibold text-success"> ({fmt(t.saved, { percent: savedPercent })})</span>
              )}
            </>
          ) : (
            t.noneCompressed
          )}
        </p>
        <div className="flex gap-2">
          <button type="button" onClick={clearAll} className="btn-secondary">
            <Trash2 className="size-4" aria-hidden />
            {c.clear}
          </button>
          <button type="button" onClick={downloadAll} disabled={isWorking || done.length === 0} className="btn-primary">
            <Download className="size-4" aria-hidden />
            {done.length > 1 ? t.downloadAll : c.download}
          </button>
        </div>
      </div>
    </div>
  );
}
