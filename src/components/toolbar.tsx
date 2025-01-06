import React from "react";
import { Eraser, PaintBucket } from "lucide-react";
import { Dispatch } from "react";
import { SetStateAction } from "react";
import { ToolType } from "types";
import MovableMenu from "./MovableMenu";

interface ToolbarProps {
  color: string;
  setColor: (color: string) => void;
  tool: ToolType;
  setTool: Dispatch<SetStateAction<ToolType>>;
  clearCanvas: () => void;
  lineWidth: number;
  setLineWidth: (width: number) => void;
  fillTolerance: number;
  setFillTolerance: Dispatch<SetStateAction<number>>;
  bounds: React.RefObject<HTMLDivElement | null>;

}

export default function Toolbar({
  color,
  setColor,
  tool,
  setTool,
  clearCanvas,
  setLineWidth,
  lineWidth,
  fillTolerance,
  setFillTolerance,
  bounds,
  initialPosition,
}: ToolbarProps) {
  return (
    <div className="flex items-center justify-between w-full p-4 bg-gray-100 rounded-lg mb-4">
      <div className="flex flex-col gap-4">
        <MovableMenu bounds={bounds} initialPosition={x: }>
          <button
            className={`flex items-center justify-center ${
              tool === "pencil24" ? "bg-[#d4d4d4]" : "bg-white"
            } hover:bg-[#d4d4d4] border border-[#808080]`}
            onClick={() => setTool("pencil24")}
          >
            <div className="w-6 h-6 rounded-full bg-black" />
          </button>
          <button
            className={`flex items-center justify-center ${
              tool === "pencil12" ? "bg-[#d4d4d4]" : "bg-white"
            } hover:bg-[#d4d4d4] border border-[#808080]`}
            onClick={() => setTool("pencil12")}
          >
            <div className="w-4 h-4 rounded-full bg-black" />
          </button>
          <button
            className={`flex items-center justify-center ${
              tool === "pencil8" ? "bg-[#d4d4d4]" : "bg-white"
            } hover:bg-[#d4d4d4] border border-[#808080]`}
            onClick={() => setTool("pencil8")}
          >
            <div className="w-3 h-3 rounded-full bg-black" />
          </button>
          <button
            className={`flex items-center justify-center ${
              tool === "pencil4" ? "bg-[#d4d4d4]" : "bg-white"
            } hover:bg-[#d4d4d4] border border-[#808080]`}
            onClick={() => setTool("pencil4")}
          >
            <div className="w-2 h-2 rounded-full bg-black" />
          </button>
          <button
            className={`flex items-center justify-center ${
              tool === "pencil1" ? "bg-[#d4d4d4]" : "bg-white"
            } hover:bg-[#d4d4d4] border border-[#808080]`}
            onClick={() => setTool("pencil1")}
          >
            <div className="w-1 h-1 rounded-full bg-black" />
          </button>
          <button
            className={`flex items-center justify-center ${
              tool === "square24" ? "bg-[#d4d4d4]" : "bg-white"
            } hover:bg-[#d4d4d4] border border-[#808080]`}
            onClick={() => setTool("square24")}
          >
            <div className="w-6 h-6 bg-black" />
          </button>
          <button
            className={`flex items-center justify-center ${
              tool === "square12" ? "bg-[#d4d4d4]" : "bg-white"
            } hover:bg-[#d4d4d4] border border-[#808080]`}
            onClick={() => setTool("square12")}
          >
            <div className="w-4 h-4 bg-black" />
          </button>
          <button
            className={`flex items-center justify-center ${
              tool === "square8" ? "bg-[#d4d4d4]" : "bg-white"
            } hover:bg-[#d4d4d4] border border-[#808080]`}
            onClick={() => setTool("square8")}
          >
            <div className="w-3 h-3 bg-black" />
          </button>
          <button
            className={`flex items-center justify-center ${
              tool === "square4" ? "bg-[#d4d4d4]" : "bg-white"
            } hover:bg-[#d4d4d4] border border-[#808080]`}
            onClick={() => setTool("square4")}
          >
            <div className="w-2 h-2 bg-black" />
          </button>
          <button
            className={`flex items-center justify-center ${
              tool === "square1" ? "bg-[#d4d4d4]" : "bg-white"
            } hover:bg-[#d4d4d4] border border-[#808080]`}
            onClick={() => setTool("square1")}
          >
            <div className="w-1 h-1 bg-black" />
          </button>
          <button
            className={`flex items-center justify-center ${
              tool === "verticalLine16" ? "bg-[#d4d4d4]" : "bg-white"
            } hover:bg-[#d4d4d4] border border-[#808080]`}
            onClick={() => setTool("verticalLine16")}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <div className="w-[2px] h-6 bg-black" />
            </div>
          </button>
          <button
            className={`flex items-center justify-center ${
              tool === "verticalLine8" ? "bg-[#d4d4d4]" : "bg-white"
            } hover:bg-[#d4d4d4] border border-[#808080]`}
            onClick={() => setTool("verticalLine8")}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <div className="w-[2px] h-4 bg-black" />
            </div>
          </button>
          <button
            className={`flex items-center justify-center ${
              tool === "verticalLine4" ? "bg-[#d4d4d4]" : "bg-white"
            } hover:bg-[#d4d4d4] border border-[#808080]`}
            onClick={() => setTool("verticalLine4")}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <div className="w-[2px] h-2 bg-black" />
            </div>
          </button>
          <button
            className={`flex items-center justify-center ${
              tool === "diagonalLine16" ? "bg-[#d4d4d4]" : "bg-white"
            } hover:bg-[#d4d4d4] border border-[#808080]`}
            onClick={() => setTool("diagonalLine16")}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <div className="w-[2px] h-6 bg-black transform rotate-[135deg]" />
            </div>
          </button>
          <button
            className={`flex items-center justify-center ${
              tool === "diagonalLine8" ? "bg-[#d4d4d4]" : "bg-white"
            } hover:bg-[#d4d4d4] border border-[#808080]`}
            onClick={() => setTool("diagonalLine8")}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <div className="w-[2px] h-4 bg-black transform rotate-[135deg]" />
            </div>
          </button>
          <button
            className={`flex items-center justify-center ${
              tool === "diagonalLine4" ? "bg-[#d4d4d4]" : "bg-white"
            } hover:bg-[#d4d4d4] border border-[#808080]`}
            onClick={() => setTool("diagonalLine4")}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <div className="w-[2px] h-2 bg-black transform rotate-[135deg]" />
            </div>
          </button>
          <button
            className={`flex items-center justify-center ${
              tool === "horizontalLine16" ? "bg-[#d4d4d4]" : "bg-white"
            } hover:bg-[#d4d4d4] border border-[#808080]`}
            onClick={() => setTool("horizontalLine16")}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <div className="w-[2px] h-6 bg-black transform rotate-90" />
            </div>
          </button>
          <button
            className={`flex items-center justify-center ${
              tool === "horizontalLine8" ? "bg-[#d4d4d4]" : "bg-white"
            } hover:bg-[#d4d4d4] border border-[#808080]`}
            onClick={() => setTool("horizontalLine8")}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <div className="w-[2px] h-4 bg-black transform rotate-90" />
            </div>
          </button>
          <button
            className={`flex items-center justify-center ${
              tool === "horizontalLine4" ? "bg-[#d4d4d4]" : "bg-white"
            } hover:bg-[#d4d4d4] border border-[#808080]`}
            onClick={() => setTool("horizontalLine4")}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <div className="w-[2px] h-2 bg-black transform rotate-90" />
            </div>
          </button>
          <button
            className={`flex items-center justify-center ${
              tool === "dottedLine16" ? "bg-[#d4d4d4]" : "bg-white"
            } hover:bg-[#d4d4d4] border border-[#808080]`}
            onClick={() => setTool("dottedLine16")}
          >
            <div className="w-4 h-4 flex items-center justify-center relative">
              <div className="absolute w-8 h-[2px] transform rotate-[135deg] flex justify-between">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-[2px] h-[2px] rounded-full bg-black"
                  />
                ))}
              </div>
            </div>
          </button>
        </MovableMenu>

        <MovableMenu bounds={bounds}>
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
      </div>
      <div className="flex items-center gap-2">
        <div className="flex gap-4 p-4">
          <div className="p-4 bg-[#f0f0f0]">
            <div className="h-7 flex items-center justify-between">
              <div className="text-xs">Line width</div>
              <input
                type="number"
                id="lineWidth"
                min="1"
                max="50"
                value={lineWidth}
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  if (!isNaN(value)) {
                    setLineWidth(value);
                  }
                }}
                className="h-full w-16 text-xs text-right pr-8 bg-white border-[#808080]"
              />
              <div className="text-xs relative right-[18px] pointer-events-none">
                px
              </div>
            </div>
          </div>
          <div className="p-4 bg-[#f0f0f0]">
            <div className="text-xs mb-1">Tolerance: {fillTolerance}</div>
            <input
              type="range"
              min="0"
              max="100"
              value={fillTolerance}
              onChange={(e) => setFillTolerance(Number(e.target.value))}
              className="w-full accent-black h-2"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-12 h-12 rounded-lg cursor-pointer"
          />
          <div className="flex gap-2 items-center"></div>
          <button
            className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors shadow-sm"
            onClick={clearCanvas}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
