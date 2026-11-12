"use client";

import { useState } from "react";
import { Upload } from "lucide-react";

interface Props {
  accept: string;
  multiple?: boolean;
  title: string;
  hint: string;
  onFiles: (files: File[]) => void;
  compact?: boolean;
}

/** Click-to-choose or drag-and-drop file picker. */
export default function DropZone({ accept, multiple = true, title, hint, onFiles, compact = false }: Props) {
  const [dragging, setDragging] = useState(false);

  const acceptList = accept.split(",").map((s) => s.trim());
  const isAccepted = (f: File) =>
    acceptList.some((a) => (a.startsWith(".") ? f.name.toLowerCase().endsWith(a) : f.type === a));

  return (
    <label
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={(e) => {
        e.preventDefault();
        setDragging(false);
        const files = Array.from(e.dataTransfer.files).filter(isAccepted);
        if (files.length) onFiles(multiple ? files : files.slice(0, 1));
      }}
      className={`flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed text-center transition-colors ${
        compact ? "gap-1 px-4 py-5" : "gap-3 px-6 py-12"
      } ${dragging ? "border-brand bg-brand-soft" : "border-border bg-surface-2/50 hover:border-brand/60 hover:bg-brand-soft/50"}`}
    >
      <span className={`grid place-items-center rounded-full bg-brand-soft text-brand-text ${compact ? "size-9" : "size-14"}`}>
        <Upload className={compact ? "size-4" : "size-6"} aria-hidden />
      </span>
      <span className="font-semibold text-text">{title}</span>
      <span className="text-sm text-muted">{hint}</span>
      <input
        type="file"
        accept={accept}
        multiple={multiple}
        className="sr-only"
        onChange={(e) => {
          const files = Array.from(e.target.files ?? []);
          if (files.length) onFiles(files);
          e.target.value = ""; // lets the same file be chosen again
        }}
      />
    </label>
  );
}
