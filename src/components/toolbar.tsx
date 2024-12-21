import React from "react";
import { Pencil, Eraser} from "lucide-react";

interface ToolbarProps {
  color: string;
  setColor: (color: string) => void;
  tool: string;
  setTool: (tool: string) => void;
  clearCanvas: () => void;
}

export default function Toolbar({
  color,
  setColor,
  tool,
  setTool,
  clearCanvas,
}: ToolbarProps) {
  return (
    <div className="flex items-center justify-between w-full p-4 bg-gray-100 rounded-lg mb-4">
      <div className="flex items-center gap-8">
        <button 
          className={`p-4 rounded-lg shadow-sm ${
            tool === 'pencil' ? 'bg-white ring-2 ring-black' : 'bg-gray-50'
          } hover:bg-white transition-all`} 
          onClick={() => setTool("pencil")}
        >
          <Pencil size={24}/>
        </button>
        <button 
          className={`p-4 rounded-lg shadow-sm ${
            tool === 'eraser' ? 'bg-white ring-2 ring-black' : 'bg-gray-50'
          } hover:bg-white transition-all`} 
          onClick={() => setTool('eraser')}
        >
          <Eraser size={24}/>
        </button>
      </div>
      <div className="flex items-center gap-8">
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-12 h-12 rounded-lg cursor-pointer"
        />
        <button
          className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors shadow-sm"
          onClick={clearCanvas}
        >
          Clear
        </button>
      </div>
    </div>
  );
}
// TODO: Add a paintbrush tool to chose the size and shape of the brush