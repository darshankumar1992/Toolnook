"use client";

import { useState } from "react";
import { ArrowDown, ArrowUp, Download, FileText, Loader2, Trash2, X } from "lucide-react";
import DropZone from "./DropZone";
import { downloadBlob, formatBytes, uniqueId } from "@/lib/files";
import { fmt } from "@/i18n/config";
import type { CommonDictionary } from "@/i18n/types";

type Text = CommonDictionary["ui"]["mergePdf"];
type CommonText = CommonDictionary["ui"]["common"];

interface PdfItem {
  id: string;
  file: File;
  pages?: number;
  error?: string;
}

/** pdf-lib is ~400 KB, so it is only downloaded when someone actually uses this tool. */
const loadPdfLib = () => import("pdf-lib");

export default function MergePdf({ t, c }: { t: Text; c: CommonText }) {
  const [items, setItems] = useState<PdfItem[]>([]);
  const [merging, setMerging] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const describeError = (err: unknown) => {
    const name = err instanceof Error ? err.name + err.message : "";
    return /encrypt/i.test(name) ? t.errorEncrypted : t.errorUnreadable;
  };
  const pagesLabel = (n: number) => fmt(n === 1 ? t.pagesOne : t.pagesOther, { n });

  const valid = items.filter((i) => i.pages !== undefined && !i.error);
  const totalPages = valid.reduce((sum, i) => sum + (i.pages ?? 0), 0);
  const stillReading = items.some((i) => i.pages === undefined && !i.error);

  async function addFiles(files: File[]) {
    setMessage(null);
    const added: PdfItem[] = files.map((file) => ({ id: uniqueId(), file }));
    setItems((prev) => [...prev, ...added]);

    // Read each file's page count (also tells us early if a file is broken or locked).
    const { PDFDocument } = await loadPdfLib();
    for (const item of added) {
      try {
        const doc = await PDFDocument.load(await item.file.arrayBuffer());
        const pages = doc.getPageCount();
        setItems((prev) => prev.map((p) => (p.id === item.id ? { ...p, pages } : p)));
      } catch (err) {
        const error = describeError(err);
        setItems((prev) => prev.map((p) => (p.id === item.id ? { ...p, error } : p)));
      }
    }
  }

  function move(index: number, delta: number) {
    setItems((prev) => {
      const next = [...prev];
      const target = index + delta;
      if (target < 0 || target >= next.length) return prev;
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
  }

  async function merge() {
    setMerging(true);
    setMessage(null);
    try {
      const { PDFDocument } = await loadPdfLib();
      const merged = await PDFDocument.create();
      for (const item of valid) {
        const doc = await PDFDocument.load(await item.file.arrayBuffer());
        const pages = await merged.copyPages(doc, doc.getPageIndices());
        pages.forEach((page) => merged.addPage(page));
      }
      const bytes = await merged.save();
      downloadBlob(new Blob([bytes as BlobPart], { type: "application/pdf" }), "merged.pdf");
      setMessage({ type: "success", text: fmt(t.success, { n: merged.getPageCount() }) });
    } catch (err) {
      setMessage({ type: "error", text: describeError(err) });
    } finally {
      setMerging(false);
    }
  }

  if (items.length === 0) {
    return <DropZone accept="application/pdf,.pdf" title={t.dropTitle} hint={t.dropHint} onFiles={addFiles} />;
  }

  return (
    <div className="space-y-5">
      <p className="text-sm text-muted">{t.orderHint}</p>
      <ol className="divide-y divide-border rounded-2xl border border-border">
        {items.map((item, index) => (
          <li key={item.id} className="flex items-center gap-3 p-3">
            <span className="w-5 text-center text-sm font-semibold text-muted">{index + 1}</span>
            <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-danger-soft text-danger">
              <FileText className="size-5" aria-hidden />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-text">{item.file.name}</p>
              <p className={`text-sm ${item.error ? "text-danger" : "text-muted"}`}>
                {item.error ??
                  (item.pages === undefined
                    ? t.reading
                    : `${pagesLabel(item.pages)} · ${formatBytes(item.file.size)}`)}
              </p>
            </div>
            <div className="flex items-center">
              <button
                type="button"
                onClick={() => move(index, -1)}
                disabled={index === 0}
                className="rounded-lg p-2 text-muted hover:bg-surface-2 hover:text-text disabled:opacity-30"
                aria-label={fmt(t.moveUp, { name: item.file.name })}
              >
                <ArrowUp className="size-4" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => move(index, 1)}
                disabled={index === items.length - 1}
                className="rounded-lg p-2 text-muted hover:bg-surface-2 hover:text-text disabled:opacity-30"
                aria-label={fmt(t.moveDown, { name: item.file.name })}
              >
                <ArrowDown className="size-4" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => setItems((prev) => prev.filter((p) => p.id !== item.id))}
                className="rounded-lg p-2 text-muted hover:bg-surface-2 hover:text-text"
                aria-label={fmt(c.remove, { name: item.file.name })}
              >
                <X className="size-4" aria-hidden />
              </button>
            </div>
          </li>
        ))}
      </ol>

      <DropZone accept="application/pdf,.pdf" compact title={t.addMore} hint={c.addMoreHint} onFiles={addFiles} />

      {message && (
        <p
          role="status"
          className={`rounded-xl px-4 py-3 text-sm ${message.type === "success" ? "bg-success-soft text-success" : "bg-danger-soft text-danger"}`}
        >
          {message.text}
        </p>
      )}

      <div className="flex flex-col items-start justify-between gap-4 rounded-2xl bg-surface-2 p-4 sm:flex-row sm:items-center">
        <p className="text-sm text-muted">
          {fmt(valid.length === 1 ? t.filesOne : t.filesOther, { n: valid.length })} ·{" "}
          {fmt(t.pagesTotal, { n: totalPages })}
          {valid.length < 2 && ` · ${t.needTwo}`}
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => {
              setItems([]);
              setMessage(null);
            }}
            className="btn-secondary"
          >
            <Trash2 className="size-4" aria-hidden />
            {c.clear}
          </button>
          <button
            type="button"
            onClick={merge}
            disabled={valid.length < 2 || merging || stillReading}
            className="btn-primary"
          >
            {merging ? <Loader2 className="size-4 animate-spin" aria-hidden /> : <Download className="size-4" aria-hidden />}
            {merging ? t.merging : t.merge}
          </button>
        </div>
      </div>
    </div>
  );
}
