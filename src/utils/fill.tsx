interface RGBAColor {
  r: number;
  g: number;
  b: number;
  a: number;
}

function getPixelColor(
  imageData: ImageData,
  x: number,
  y: number,
  width: number,
): RGBAColor {
  const index = (y * width + x) * 4;
  return {
    r: imageData.data[index],
    g: imageData.data[index + 1],
    b: imageData.data[index + 2],
    a: imageData.data[index + 3],
  };
}

function colorsMatch(
  a: RGBAColor,
  b: RGBAColor,
  tolerance: number = 0,
): boolean {
  return (
    Math.abs(a.r - b.r) <= tolerance &&
    Math.abs(a.g - b.g) <= tolerance &&
    Math.abs(a.b - b.b) <= tolerance &&
    Math.abs(a.a - b.a) <= tolerance
  );
}

export function floodFill(
  ctx: CanvasRenderingContext2D,
  startX: number,
  startY: number,
  fillColor: string,
  tolerance: number = 0,
): void {
  const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
  const pixels = imageData.data;
  const width = ctx.canvas.width;
  const height = ctx.canvas.height;

  const fillColorEl = document.createElement("div");
  fillColorEl.style.backgroundColor = fillColor;
  document.body.appendChild(fillColorEl);
  const computedColor = window.getComputedStyle(fillColorEl).backgroundColor;
  document.body.removeChild(fillColorEl);
  const [r, g, b] = computedColor.match(/\d+/g)!.map(Number);

  const targetColor = getPixelColor(imageData, startX, startY, width);

  if (r === targetColor.r && g === targetColor.g && b === targetColor.b) {
    return;
  }

  const stack: [number, number][] = [[startX, startY]];

  while (stack.length) {
    const [x, y] = stack.pop()!;

    let pixelPos = (y * width + x) * 4;

    const currentColor = {
      r: pixels[pixelPos],
      g: pixels[pixelPos + 1],
      b: pixels[pixelPos + 2],
      a: pixels[pixelPos + 3],
    };

    if (!colorsMatch(currentColor, targetColor, tolerance)) continue;

    pixels[pixelPos] = r;
    pixels[pixelPos + 1] = g;
    pixels[pixelPos + 2] = b;
    pixels[pixelPos + 3] = 255;

    if (x > 0) stack.push([x - 1, y]);
    if (x < width - 1) stack.push([x + 1, y]);
    if (y > 0) stack.push([x, y - 1]);
    if (y < height - 1) stack.push([x, y + 1]);
  }

  ctx.putImageData(imageData, 0, 0);
}
