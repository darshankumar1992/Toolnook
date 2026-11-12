/** Human-readable file size, e.g. 1536 -> "1.5 KB". */
export function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  const units = ["KB", "MB", "GB"];
  let value = bytes / 1024;
  let i = 0;
  while (value >= 1024 && i < units.length - 1) {
    value /= 1024;
    i++;
  }
  return `${value.toFixed(value >= 100 ? 0 : 1)} ${units[i]}`;
}

/** Saves a Blob to the visitor's device using a temporary link. */
export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

/** "holiday.photo.png" -> "holiday.photo" */
export function baseName(filename: string): string {
  const dot = filename.lastIndexOf(".");
  return dot > 0 ? filename.slice(0, dot) : filename;
}

let idCounter = 0;
export function uniqueId(): string {
  idCounter += 1;
  return `${Date.now().toString(36)}-${idCounter}`;
}
