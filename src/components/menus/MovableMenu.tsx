import React from "react";
import { Rnd } from "react-rnd";

interface MovableMenuProps {
  children: React.ReactNode;
  initialPosition: { x: number; y: number };
  bounds?: string | HTMLElement | undefined;
  layout?: "grid" | "flex";
}

export default function MovableMenu({
  children,
  initialPosition = { x: 50, y: 50 },
  bounds,
  layout = "grid",
}: MovableMenuProps) {
  return (
    <Rnd
      default={{
        x: initialPosition.x,
        y: initialPosition.y,
        width: "auto",
        height: "auto",
      }}
      bounds="window"
      enableResizing={false}
      style={{
        background: "#f0f0f0",
        border: "1px solid #808080",
        boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
        overflow: "hidden",
      }}
    >
      <div className="h-full flex flex-col">
        <div
          className="bg-[#d4d4d4] p-2 cursor-move border-b border-[#808080] flex items-center"
          style={{ touchAction: "none" }}
        ></div>
        {layout === "grid" ? (
          <div
            className="grid grid-cols-5 [&>*]:w-7 [&>*]:h-7"
            style={{
              gap: 0,
            }}
          >
            {children}
          </div>
        ) : (
          <div className="flex flex-col">{children}</div>
        )}
      </div>
    </Rnd>
  );
}
