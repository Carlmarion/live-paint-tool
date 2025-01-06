import React from "react";
import { Rnd } from "react-rnd";

interface MovableMenuProps {
  children: React.ReactNode;
  initialPosition: { x: number; y: number };
  bounds?: string | HTMLElement | undefined;
  title?: string;
}

export default function MovableMenu({
  children,
  initialPosition = { x: 50, y: 50 },
  bounds,
  title,
}: MovableMenuProps) {
  const childrenCount = React.Children.count(children);
  const rows = Math.ceil(childrenCount / 5);
  const headerHeight = 32;
  const buttonHeight = 28;

  const totalHeight = headerHeight + rows * buttonHeight;
  return (
    <Rnd
      default={{
        x: initialPosition.x,
        y: initialPosition.y,
        width: 140,
        height: totalHeight,
      }}
      bounds="parent"
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

        <div
          className="grid grid-cols-5 [&>*]:w-7 [&>*]:h-7"
          style={{
            gap: 0,
          }}
        >
          {children}
        </div>
      </div>
    </Rnd>
  );
}
