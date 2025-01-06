import { ToolType } from "types/index";

interface LineToolsProps {
  tool: ToolType;
  setTool: (tool: ToolType) => void;
}

const LINE_TOOLS = [
  { tool: "verticalLine16", height: "h-6", rotation: "" },
  { tool: "verticalLine8", height: "h-4", rotation: "" },
  { tool: "verticalLine4", height: "h-2", rotation: "" },
  { tool: "diagonalLine16", height: "h-6", rotation: "rotate-[135deg]" },
  { tool: "diagonalLine8", height: "h-4", rotation: "rotate-[135deg]" },
  { tool: "diagonalLine4", height: "h-2", rotation: "rotate-[135deg]" },
  { tool: "horizontalLine16", height: "h-6", rotation: "rotate-90" },
  { tool: "horizontalLine8", height: "h-4", rotation: "rotate-90" },
  { tool: "horizontalLine4", height: "h-2", rotation: "rotate-90" },
] as const;

export default function LineTools({ tool, setTool }: LineToolsProps) {
  return (
    <>
      {LINE_TOOLS.map(({ tool: lineTool, height, rotation }) => (
        <button
          key={lineTool}
          className={`flex items-center justify-center ${
            tool === lineTool ? "bg-[#d4d4d4]" : "bg-white"
          } hover:bg-[#d4d4d4] border border-[#808080]`}
          onClick={() => setTool(lineTool)}
        >
          <div className="w-6 h-6 flex items-center justify-center">
            <div
              className={`w-[2px] ${height} bg-black transform ${rotation}`}
            />
          </div>
        </button>
      ))}

      {/* Dotted line */}
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
    </>
  );
}
