import { Fragment } from "react";

/**
 * Renders translated text with **bold** and `code` markers.
 * Works in both server and client components.
 */
export default function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
        if (part.startsWith("`") && part.endsWith("`")) {
          return (
            <code key={i} className="rounded bg-surface-2 px-1.5 py-0.5 font-mono text-[0.9em] text-text">
              {part.slice(1, -1)}
            </code>
          );
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}
