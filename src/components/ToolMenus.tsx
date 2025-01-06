import React from "react";
import { ToolType } from "types";
import MovableMenu from "./MovableMenu";
import { Eraser, PaintBucket } from "lucide-react";

interface ToolMenuProps {
  tool: ToolType;
  setTool: (tool: ToolType) => void;
  bounds: HTMLElement | null;
}

export default function ToolMenus({ tool, setTool, bounds }: ToolMenuProps) {
  {
    /* Brushes */
  }
  const brushButtons = (
    <MovableMenu
      bounds={bounds}
      initialPosition={{ x: 50, y: 10 }}
      title="Brushes"
    >
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
              <div key={i} className="w-[2px] h-[2px] rounded-full bg-black" />
            ))}
          </div>
        </div>
      </button>
    </MovableMenu>
  );

  {
    /* Utilities Menu */
  }
  const utilityTools = (
    <MovableMenu
      bounds={bounds}
      initialPosition={{ x: 200, y: 10 }}
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
  return (
    <>
      {brushButtons}
      {utilityTools}
    </>
  );
}
