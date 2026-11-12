import ToolView from "@/views/ToolView";
import { toolMetadata } from "@/views/metadata";

export const metadata = toolMetadata("en", "json-formatter");

export default function Page() {
  return <ToolView locale="en" slug="json-formatter" />;
}
