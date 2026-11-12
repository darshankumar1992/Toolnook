import ToolView from "@/views/ToolView";
import { toolMetadata } from "@/views/metadata";

export const metadata = toolMetadata("en", "merge-pdf");

export default function Page() {
  return <ToolView locale="en" slug="merge-pdf" />;
}
