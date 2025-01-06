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
      title="Settings"
    >
      <div className="p-4 space-y-4">
        <div className="bg-[#f0f0f0] p-4">
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

        <div className="bg-[#f0f0f0] p-4">
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

        <div className="flex gap-2">
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
    </MovableMenu>
  );
}
