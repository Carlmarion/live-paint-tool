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
  return (
    <>
      <BrushToolMenu tool={tool} setTool={setTool} bounds={bounds} />
      <UtilityToolMenu
        tool={tool}
        setTool={setTool}
        initialPosition={{ x: 600, y: 50 }}
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
        initialPosition={{ x: 600, y: 200 }}
        bounds={bounds}
      />
    </>
  );
}
