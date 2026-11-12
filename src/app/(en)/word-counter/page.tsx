import ToolView from "@/views/ToolView";
import { toolMetadata } from "@/views/metadata";

export const metadata = toolMetadata("en", "word-counter");

export default function Page() {
  return <ToolView locale="en" slug="word-counter" />;
}
