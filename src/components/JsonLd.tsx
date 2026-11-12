/** Renders structured data (schema.org) that helps search engines understand a page. */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // Escaping "<" stops the JSON from ever closing the script tag early.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
