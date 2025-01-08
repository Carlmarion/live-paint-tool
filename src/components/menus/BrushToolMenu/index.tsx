import { ToolType } from "types/index";
import MovableMenu from "../MovableMenu";
import PencilTools from "./PencilTools";
import SquareTools from "./SquareTools";
import LineTools from "./LineTools";

interface BrushToolMenuProps {
  tool: ToolType;
  setTool: (tool: ToolType) => void;
  bounds: string | HTMLElement | null;
  initialPosition: { x: number; y: number };
}

export default function BrushToolMenus({
  tool,
  setTool,
  bounds,
  initialPosition,
}: BrushToolMenuProps) {
  return (
    <>
      <MovableMenu
        bounds={bounds || undefined}
        initialPosition={{ x: 50, y: 10 }}
      >
        <PencilTools tool={tool} setTool={setTool} />
        <SquareTools tool={tool} setTool={setTool} />
        <LineTools tool={tool} setTool={setTool} />
      </MovableMenu>
    </>
  );
}
