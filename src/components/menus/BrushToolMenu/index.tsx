import { ToolType } from "types/index";
import MovableMenu from "../MovableMenu";
import PencilTools from "./PencilTools";
import SquareTools from "./SquareTools";
import LineTools from "./LineTools";

interface BrushToolMenuProps {
  tool: ToolType;
  setTool: (tool: ToolType) => void;
  bounds: string | HTMLElement | null;
}

export default function BrushToolMenus({
  tool,
  setTool,
  bounds,
}: BrushToolMenuProps) {
  return (
    <>
      <MovableMenu
        bounds={bounds || undefined}
        initialPosition={{ x: 50, y: 10 }}
        title="Brushes"
      >
        <PencilTools tool={tool} setTool={setTool} />
      </MovableMenu>

      <MovableMenu
        bounds={bounds || undefined}
        initialPosition={{ x: 200, y: 10 }}
        title="Brushes"
      >
        <SquareTools tool={tool} setTool={setTool} />
      </MovableMenu>
      <MovableMenu
        bounds={bounds || undefined}
        initialPosition={{ x: 350, y: 10 }}
        title="Brushes"
      >
        <LineTools tool={tool} setTool={setTool} />
      </MovableMenu>
    </>
  );
}
