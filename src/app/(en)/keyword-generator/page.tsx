import ToolView from "@/views/ToolView";
import { toolMetadata } from "@/views/metadata";

export const metadata = toolMetadata("en", "keyword-generator");

export default function Page() {
  return <ToolView locale="en" slug="keyword-generator" />;
}
