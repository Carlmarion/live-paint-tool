import MovableMenu from "../MovableMenu";

interface SettingsToolMenuProps {
  color: string;
  setColor: (color: string) => void;
  lineWidth: number;
  setLineWidth: (width: number) => void;
  fillTolerance: number;
  setFillTolerance: (tolerance: number) => void;
  clearCanvas: () => void;
  bounds: string | HTMLElement | null;
  initialPosition: { x: number; y: number };
}

export default function SettingsToolMenu({
  color,
  setColor,
  lineWidth,
  setLineWidth,
  fillTolerance,
  setFillTolerance,
  clearCanvas,
  bounds,
  initialPosition,
}: SettingsToolMenuProps) {
  return (
    <MovableMenu
      bounds={bounds || undefined}
      initialPosition={initialPosition}
      layout="flex"
    >
      <div>
        <div className="bg-[#f0f0f0] p-4">
          <div className="h-6 flex items-center justify-between">
            <div className="text-xs pr-4">Line width</div>
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

        <div className="bg-[#f0f0f0]">
          <div className="text-xs mb-1 pl-4">Tolerance: {fillTolerance}</div>
          <input
            type="range"
            min="0"
            max="100"
            value={fillTolerance}
            onChange={(e) => setFillTolerance(Number(e.target.value))}
            className="w-full accent-black h-2"
          />
        </div>

        <div className="flex gap-2">
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-10 h-10 cursor-pointer"
          />
          <button
            className="px-2 py-2 bg-black text-sm text-white hover:bg-gray-800 transition-colors shadow-sm"
            onClick={clearCanvas}
          >
            Clear canvas
          </button>
        </div>
      </div>
    </MovableMenu>
  );
}
