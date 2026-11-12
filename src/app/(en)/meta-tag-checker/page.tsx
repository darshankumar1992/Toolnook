import ToolView from "@/views/ToolView";
import { toolMetadata } from "@/views/metadata";

export const metadata = toolMetadata("en", "meta-tag-checker");

export default function Page() {
  return <ToolView locale="en" slug="meta-tag-checker" />;
}
