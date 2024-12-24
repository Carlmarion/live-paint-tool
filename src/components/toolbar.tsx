import React from "react";
import { Eraser, PaintBucket } from "lucide-react";
import { Dispatch } from "react";
import { SetStateAction } from "react";
import { ToolType } from "types";

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
}: ToolbarProps) {
  return (
    <div className="flex items-center justify-between w-full p-4 bg-gray-100 rounded-lg mb-4">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <span className="w-20 text-sm text-gray-500">Round</span>
          <div className="flex gap-2">
            <button
              className={`p-4 rounded-lg shadow-sm ${
                tool === "pencil24"
                  ? "bg-white ring-2 ring-black"
                  : "bg-gray-50"
              } hover:bg-white transition-all`}
              onClick={() => setTool("pencil24")}
            >
              <div className="w-6 h-6 rounded-full bg-black" />
            </button>
            <button
              className={`p-4 rounded-lg shadow-sm ${
                tool === "pencil12"
                  ? "bg-white ring-2 ring-black"
                  : "bg-gray-50"
              } hover:bg-white transition-all`}
              onClick={() => setTool("pencil12")}
            >
              <div className="w-4 h-4 rounded-full bg-black" />
            </button>
            <button
              className={`p-4 rounded-lg shadow-sm ${
                tool === "pencil8" ? "bg-white ring-2 ring-black" : "bg-gray-50"
              } hover:bg-white transition-all`}
              onClick={() => setTool("pencil8")}
            >
              <div className="w-3 h-3 rounded-full bg-black" />
            </button>
            <button
              className={`p-4 rounded-lg shadow-sm ${
                tool === "pencil4" ? "bg-white ring-2 ring-black" : "bg-gray-50"
              } hover:bg-white transition-all`}
              onClick={() => setTool("pencil4")}
            >
              <div className="w-2 h-2 rounded-full bg-black" />
            </button>
            <button
              className={`p-4 rounded-lg shadow-sm ${
                tool === "pencil1" ? "bg-white ring-2 ring-black" : "bg-gray-50"
              } hover:bg-white transition-all`}
              onClick={() => setTool("pencil1")}
            >
              <div className="w-1 h-1 rounded-full bg-black" />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-20 text-sm text-gray-500">Square</span>
          <div className="flex gap-2">
            <button
              className={`p-4 rounded-lg shadow-sm ${
                tool === "square24"
                  ? "bg-white ring-2 ring-black"
                  : "bg-gray-50"
              } hover:bg-white transition-all`}
              onClick={() => setTool("square24")}
            >
              <div className="w-6 h-6 bg-black" />
            </button>
            <button
              className={`p-4 rounded-lg shadow-sm ${
                tool === "square12"
                  ? "bg-white ring-2 ring-black"
                  : "bg-gray-50"
              } hover:bg-white transition-all`}
              onClick={() => setTool("square12")}
            >
              <div className="w-4 h-4 bg-black" />
            </button>
            <button
              className={`p-4 rounded-lg shadow-sm ${
                tool === "square8" ? "bg-white ring-2 ring-black" : "bg-gray-50"
              } hover:bg-white transition-all`}
              onClick={() => setTool("square8")}
            >
              <div className="w-3 h-3 bg-black" />
            </button>
            <button
              className={`p-4 rounded-lg shadow-sm ${
                tool === "square4" ? "bg-white ring-2 ring-black" : "bg-gray-50"
              } hover:bg-white transition-all`}
              onClick={() => setTool("square4")}
            >
              <div className="w-2 h-2 bg-black" />
            </button>
            <button
              className={`p-4 rounded-lg shadow-sm ${
                tool === "square1" ? "bg-white ring-2 ring-black" : "bg-gray-50"
              } hover:bg-white transition-all`}
              onClick={() => setTool("square1")}
            >
              <div className="w-1 h-1 bg-black" />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-white p-2 rounded-md">
            <label htmlFor="lineWidth" className="text-sm text-gray-600">
              Stroke width:
            </label>
            <input
              type="number"
              id="lineWidth"
              min="1"
              max="50"
              value={lineWidth}
              onChange={(e) => setLineWidth(Number(e.target.value))}
              className="w-16 px-2 py-1 border rounded text-sm"
            />
            <span className="text-sm text-gray-500">px</span>
          </div>

          <div className="flex gap-2">
            {[1, 2, 4, 8, 16].map((width) => (
              <button
                key={width}
                onClick={() => setLineWidth(width)}
                className={`px-3 py-1 rounded ${
                  lineWidth === width
                    ? "bg-black text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {width}px
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <button
              className="px-3 py-1 rounded bg-black text-white"
              onClick={() => setLineWidth(2)}
            >
              Reset
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-20 text-sm text-gray-500">Lines</span>
          <div className="flex gap-2">
            <button
              className={`p-4 rounded-lg shadow-sm ${
                tool === "verticalLine16"
                  ? "bg-white ring-2 ring-black"
                  : "bg-gray-50"
              } hover:bg-white transition-all`}
              onClick={() => setTool("verticalLine16")}
            >
              <div className="w-[2px] h-6 bg-black mx-auto" />
            </button>
            <button
              className={`p-4 rounded-lg shadow-sm ${
                tool === "verticalLine8"
                  ? "bg-white ring-2 ring-black"
                  : "bg-gray-50"
              } hover:bg-white transition-all`}
              onClick={() => setTool("verticalLine8")}
            >
              <div className="w-[2px] h-4 bg-black mx-auto" />
            </button>
            <button
              className={`p-4 rounded-lg shadow-sm ${
                tool === "verticalLine4"
                  ? "bg-white ring-2 ring-black"
                  : "bg-gray-50"
              } hover:bg-white transition-all`}
              onClick={() => setTool("verticalLine4")}
            >
              <div className="w-[2px] h-2 bg-black mx-auto" />
            </button>
            <button
              className={`p-4 rounded-lg shadow-sm ${
                tool === "diagonalLine16"
                  ? "bg-white ring-2 ring-black"
                  : "bg-gray-50"
              } hover:bg-white transition-all`}
              onClick={() => setTool("diagonalLine16")}
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <div className="w-[2px] h-8 bg-black transform rotate-[135deg]" />
              </div>
            </button>
            <button
              className={`p-4 rounded-lg shadow-sm ${
                tool === "diagonalLine8"
                  ? "bg-white ring-2 ring-black"
                  : "bg-gray-50"
              } hover:bg-white transition-all`}
              onClick={() => setTool("diagonalLine8")}
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <div className="w-[2px] h-6 bg-black transform rotate-[135deg]" />
              </div>
            </button>
            <button
              className={`p-4 rounded-lg shadow-sm ${
                tool === "diagonalLine4"
                  ? "bg-white ring-2 ring-black"
                  : "bg-gray-50"
              } hover:bg-white transition-all`}
              onClick={() => setTool("diagonalLine4")}
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <div className="w-[2px] h-4 bg-black transform rotate-[135deg]" />
              </div>
            </button>
            <button
              className={`p-4 rounded-lg shadow-sm ${
                tool === "horizontalLine16"
                  ? "bg-white ring-2 ring-black"
                  : "bg-gray-50"
              } hover:bg-white transition-all`}
              onClick={() => setTool("horizontalLine16")}
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <div className="w-[2px] h-8 bg-black transform rotate-90" />
              </div>
            </button>
            <button
              className={`p-4 rounded-lg shadow-sm ${
                tool === "horizontalLine8"
                  ? "bg-white ring-2 ring-black"
                  : "bg-gray-50"
              } hover:bg-white transition-all`}
              onClick={() => setTool("horizontalLine8")}
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <div className="w-[2px] h-6 bg-black transform rotate-90" />
              </div>
            </button>
            <button
              className={`p-4 rounded-lg shadow-sm ${
                tool === "horizontalLine4"
                  ? "bg-white ring-2 ring-black"
                  : "bg-gray-50"
              } hover:bg-white transition-all`}
              onClick={() => setTool("horizontalLine4")}
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <div className="w-[2px] h-3 bg-black transform rotate-90" />
              </div>
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button
              className={`p-4 rounded-lg shadow-sm ${
                tool === "dottedLine16"
                  ? "bg-white ring-2 ring-black"
                  : "bg-gray-50"
              } hover:bg-white transition-all`}
              onClick={() => setTool("dottedLine16")}
            >
              <div className="w-6 h-6 flex items-center justify-center relative">
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
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-20 text-sm text-gray-500">Utils</span>
          <div className="flex gap-2">
            <button
              className={`p-4 rounded-lg shadow-sm ${
                tool === "eraser" ? "bg-white ring-2 ring-black" : "bg-gray-50"
              } hover:bg-white transition-all`}
              onClick={() => setTool("eraser")}
            >
              <Eraser size={24} />
            </button>
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-12 h-12 rounded-lg cursor-pointer"
            />
            <div className="flex gap-2 items-center">
              <button
                className={`p-4 rounded-lg shadow-sm ${
                  tool === "bucket"
                    ? "bg-white ring-2 ring-black"
                    : "bg-gray-50"
                } hover:bg-white transition-all`}
                onClick={() => setTool("bucket")}
              >
                <PaintBucket size={24} />
              </button>
              <div className="flex flex-col gap-1">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={fillTolerance}
                  onChange={(e) => setFillTolerance(Number(e.target.value))}
                  className="w-24 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <span className="text-xs text-black text-center">
                  Tolerance: {fillTolerance}
                </span>
              </div>
            </div>
            <button
              className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors shadow-sm"
              onClick={clearCanvas}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
