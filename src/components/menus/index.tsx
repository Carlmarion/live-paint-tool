import React from "react";
import { ToolType } from "types/index";
import BrushToolMenu from "./BrushToolMenu";
import UtilityToolMenu from "./UtilityToolMenu";
import SettingsToolMenu from "./SettingsToolMenu";

interface ToolMenuProps {
  tool: ToolType;
  setTool: (tool: ToolType) => void;
  bounds: string | HTMLElement | null;
  color: string;
  setColor: (color: string) => void;
  lineWidth: number;
  setLineWidth: (width: number) => void;
  fillTolerance: number;
  setFillTolerance: (tolerance: number) => void;
  clearCanvas: () => void;
}

export default function ToolMenus({
  tool,
  setTool,
  bounds,
  color,
  setColor,
  lineWidth,
  setLineWidth,
  fillTolerance,
  setFillTolerance,
  clearCanvas,
}: ToolMenuProps) {
  const [menuPositions, setMenuPositions] = React.useState({
    brush: { x: window.innerWidth - 50, y: 50 },
    utility: { x: 50, y: 50 },
    settings: { x: 50, y: 150 },
  });

  React.useEffect(() => {
    const handleResize = () => {
      setMenuPositions({
        brush: { x: window.innerWidth - 50, y: 50 },
        utility: { x: 50, y: 50 },
        settings: { x: 50, y: 150 },
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <BrushToolMenu
        initialPosition={menuPositions.brush}
        tool={tool}
        setTool={setTool}
        bounds={bounds}
      />
      <UtilityToolMenu
        tool={tool}
        setTool={setTool}
        initialPosition={menuPositions.utility}
        bounds={bounds}
      />
      <SettingsToolMenu
        color={color}
        setColor={setColor}
        fillTolerance={fillTolerance}
        setFillTolerance={setFillTolerance}
        clearCanvas={clearCanvas}
        lineWidth={lineWidth}
        setLineWidth={setLineWidth}
        initialPosition={menuPositions.settings}
        bounds={bounds}
      />
    </>
  );
}
