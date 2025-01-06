import { ToolType } from "types/index";

interface PencilToolsProps {
  tool: ToolType;
  setTool: (tool: ToolType) => void;
}

const PENCIL_SIZES = [
  { size: 24, width: "w-6", height: "h-6" },
  { size: 12, width: "w-4", height: "h-4" },
  { size: 8, width: "w-3", height: "h-3" },
  { size: 4, width: "w-2", height: "h-2" },
  { size: 1, width: "w-1", height: "h-1" },
] as const;

export default function PencilTools({ tool, setTool }: PencilToolsProps) {
  return (
    <>
      {PENCIL_SIZES.map(({ size, width, height }) => (
        <button
          key={size}
          className={`flex items-center justify-center ${tool === `pencil${size}` ? "bg-[#d4d4d4]" : "bg-white"} hover:bg-[#d4d4d4] border border-[#808080]`}
          onClick={() => setTool(`pencil${size}` as ToolType)}
        >
          <div className={`${width} ${height} rounded-full bg-black`} />
        </button>
      ))}
    </>
  );
}
