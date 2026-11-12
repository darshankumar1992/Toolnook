import ToolView from "@/views/ToolView";
import { toolMetadata } from "@/views/metadata";

export const metadata = toolMetadata("en", "image-compressor");

export default function Page() {
  return <ToolView locale="en" slug="image-compressor" />;
}
