import React from "react";

interface CanvasProps {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  startDrawing: (event: React.MouseEvent<HTMLCanvasElement>) => void;
  draw: (event: React.MouseEvent<HTMLCanvasElement>) => void;
  stopDrawing: () => void;
}

export default function Canvas({
  canvasRef,
  startDrawing,
  draw,
  stopDrawing,
}: CanvasProps) {
  return (
    <canvas
      ref={canvasRef}
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={stopDrawing}
      onMouseLeave={stopDrawing}
      style={{border: "2px solid black"}}
    />
  );
}
