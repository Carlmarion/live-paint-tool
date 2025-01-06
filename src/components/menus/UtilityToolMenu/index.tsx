import { ToolType } from "types/index";
import MovableMenu from "../MovableMenu";
import { Eraser, PaintBucket } from "lucide-react";

interface UtilityToolMenuProps {
  tool: ToolType;
  setTool: (tool: ToolType) => void;
  bounds: string | HTMLElement | null;
  initialPosition: { x: number; y: number };
}

export default function UtilityToolMenu({
  tool,
  setTool,
  bounds,
  initialPosition,
}: UtilityToolMenuProps) {
  return (
    <MovableMenu
      bounds={bounds || undefined}
      initialPosition={initialPosition}
      title="Utilities"
    >
      <button
        className={`flex items-center justify-center ${
          tool === "eraser" ? "bg-[#d4d4d4]" : "bg-white"
        } hover:bg-[#d4d4d4] border border-[#808080]`}
        onClick={() => setTool("eraser")}
      >
        <Eraser size={24} />
      </button>
      <button
        className={`flex items-center justify-center ${
          tool === "bucket" ? "bg-[#d4d4d4]" : "bg-white"
        } hover:bg-[#d4d4d4] border border-[#808080]`}
        onClick={() => setTool("bucket")}
      >
        <PaintBucket size={24} />
      </button>
    </MovableMenu>
  );
}
