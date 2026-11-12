import ToolView from "@/views/ToolView";
import { toolMetadata } from "@/views/metadata";

export const metadata = toolMetadata("en", "emi-calculator");

export default function Page() {
  return <ToolView locale="en" slug="emi-calculator" />;
}
