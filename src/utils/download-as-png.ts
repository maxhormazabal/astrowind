interface DownloadConfig {
  svgElement: SVGElement;
  width: number;
  filename: string;
}

export function convertSvgToPng(svgElement: SVGElement, width: number): Promise<string> {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    // Calculate height maintaining aspect ratio
    const svg = svgElement as SVGSVGElement;
    const aspectRatio = svg.viewBox.baseVal.height / svg.viewBox.baseVal.width;
    const height = width * aspectRatio;

    // Set canvas size with higher pixel density for better quality
    const scale = 2; // 2x pixel density
    canvas.width = width * scale;
    canvas.height = height * scale;

    if (!ctx) {
      reject(new Error('Could not get canvas context'));
      return;
    }

    // Scale the context to match the higher pixel density
    ctx.scale(scale, scale);

    const svgBlob = new Blob([svgElement.outerHTML], { type: 'image/svg+xml;charset=utf-8' });
    const URL = window.URL || window.webkitURL || window;
    const blobURL = URL.createObjectURL(svgBlob);

    img.onload = () => {
      ctx.drawImage(img, 0, 0, width, height);
      URL.revokeObjectURL(blobURL);
      resolve(canvas.toDataURL('image/png'));
    };

    img.onerror = () => {
      URL.revokeObjectURL(blobURL);
      reject(new Error('Error loading SVG'));
    };

    img.src = blobURL;
  });
}

export async function downloadAsPng({ svgElement, width, filename }: DownloadConfig): Promise<void> {
  try {
    const pngDataUrl = await convertSvgToPng(svgElement, width);

    // Create temporary link and trigger download
    const link = document.createElement('a');
    link.download = filename;
    link.href = pngDataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Error downloading PNG:', error);
    throw error;
  }
}
