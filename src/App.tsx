import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Toolbar from "./components/toolbar.tsx";
import Canvas from "./components/canvas.tsx";

export default function App() {
  const [color, setColor] = useState("#000000");
  const [tool, setTool] = useState("pencil");
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null!) as React.RefObject<HTMLCanvasElement>;
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
        
        // Fill canvas with white background initially
        context.fillStyle = "white";
        context.fillRect(0, 0, canvas.width, canvas.height);
      }
    }
  }, []);

  // Update color when it changes
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
      if (tool === "pencil") {
        contextRef.current.globalCompositeOperation = "source-over";
        contextRef.current.strokeStyle = color;
      } else if (tool === "eraser") {
        contextRef.current.globalCompositeOperation = "destination-out";
      }
      contextRef.current.lineTo(offsetX, offsetY);
      contextRef.current.stroke();
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
