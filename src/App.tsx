import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Canvas from "components/Canvas";
import Toolbar from "components/Toolbar";
import { ToolType } from "types";
export default function App() {
  const [color, setColor] = useState("#000000");
  const [tool, setTool] = useState<ToolType>("pencil1");
  const [lineWidth, setLineWidth] = useState(2);
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(
    null!,
  ) as React.RefObject<HTMLCanvasElement>;
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = 800;
      canvas.height = 600;
      const context = canvas.getContext("2d");
      if (context) {
        context.lineCap = "round";
        context.lineJoin = "round";
        context.strokeStyle = color;
        context.lineWidth = 5;
        contextRef.current = context;

        context.fillStyle = "white";
        context.fillRect(0, 0, canvas.width, canvas.height);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log("Current line width:", lineWidth);
  }, [lineWidth]);

  useEffect(() => {
    if (tool.startsWith("pencil")) {
      const size = parseInt(tool.replace("pencil", ""));
      setLineWidth(size);
    }
  }, [tool]);

  useEffect(() => {
    if (contextRef.current) {
      contextRef.current.strokeStyle = color;
    }
  }, [color]);

  const startDrawing = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const { offsetX, offsetY } = event.nativeEvent;
    if (contextRef.current) {
      contextRef.current.beginPath();
      contextRef.current.moveTo(offsetX, offsetY);
      setIsDrawing(true);
    }
  };

  const draw = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = event.nativeEvent;

    if (contextRef.current) {
      contextRef.current.save();
      if (tool.startsWith("pencil")) {
        contextRef.current.globalCompositeOperation = "source-over";
        contextRef.current.strokeStyle = color;
        const size = parseInt(tool.replace("pencil", ""));
        contextRef.current.lineWidth = size;
        setLineWidth(size);
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();
      } else if (tool.startsWith("square")) {
        contextRef.current.globalCompositeOperation = "source-over";
        contextRef.current.fillStyle = color;
        const size = parseInt(tool.replace("square", ""));
        contextRef.current.fillRect(
          offsetX - size / 2,
          offsetY - size / 2,
          size,
          size,
        );
      } else if (tool.startsWith("verticalLine")) {
        contextRef.current.globalCompositeOperation = "source-over";
        contextRef.current.strokeStyle = color;
        contextRef.current.lineWidth = lineWidth;
        const size = parseInt(tool.replace("verticalLine", ""));
        contextRef.current.beginPath();
        const startY = offsetY - size;
        const endY = offsetY + size;
        contextRef.current.moveTo(offsetX, startY);
        contextRef.current.lineTo(offsetX, endY);
        contextRef.current.stroke();
      } else if (tool.startsWith("diagonalLine")) {
        contextRef.current.globalCompositeOperation = "source-over";
        contextRef.current.strokeStyle = color;
        contextRef.current.lineWidth = lineWidth;
        const size = parseInt(tool.replace("diagonalLine", ""));
        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX - size, offsetY - size);
        contextRef.current.lineTo(offsetX + size, offsetY + size);
        contextRef.current.stroke();
      } else if (tool.startsWith("horizontalLine")) {
        contextRef.current.globalCompositeOperation = "source-over";
        contextRef.current.strokeStyle = color;
        contextRef.current.lineWidth = lineWidth;
        const size = parseInt(tool.replace("horizontalLine", ""));
        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX - size, offsetY);
        contextRef.current.lineTo(offsetX + size, offsetY);
        contextRef.current.stroke();
      } else if (tool === "eraser") {
        contextRef.current.globalCompositeOperation = "destination-out";
        contextRef.current.lineWidth = lineWidth;
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();
      }
      contextRef.current.restore();
    }
  };

  const stopDrawing = () => {
    contextRef.current?.closePath();
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (context) {
      context.fillStyle = "white";
      context.fillRect(0, 0, canvas?.width || 0, canvas?.height || 0);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-5xl">
        <h1 className="text-2xl font-bold mb-6 text-center">Canvas</h1>
        <Toolbar
          color={color}
          setColor={setColor}
          tool={tool}
          setTool={setTool}
          clearCanvas={clearCanvas}
          lineWidth={lineWidth}
          setLineWidth={setLineWidth}
        />
        <div className="mt-6 flex justify-center">
          <Canvas
            canvasRef={canvasRef}
            startDrawing={startDrawing}
            draw={draw}
            stopDrawing={stopDrawing}
          />
        </div>
      </div>
    </div>
  );
}
