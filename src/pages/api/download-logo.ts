import type { APIRoute } from 'astro';
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const format = url.searchParams.get('format');
  
  if (!format || !['svg', 'png'].includes(format)) {
    return new Response('Formato no válido', { status: 400 });
  }

  try {
    // Ruta al archivo SVG original
    const svgPath = path.join(process.cwd(), 'src', 'assets', 'tools', 'logos', 'logo.svg');
    
    // Leer el archivo SVG
    const svgBuffer = await fs.readFile(svgPath);

    // Si el formato solicitado es SVG, devolver directamente
    if (format === 'svg') {
      return new Response(svgBuffer, {
        headers: {
          'Content-Type': 'image/svg+xml',
          'Content-Disposition': 'attachment; filename=logo.svg'
        }
      });
    }

    // Si es PNG, convertir usando sharp
    if (format === 'png') {
      const pngBuffer = await sharp(svgBuffer)
        .png()
        .toBuffer();

      return new Response(pngBuffer, {
        headers: {
          'Content-Type': 'image/png',
          'Content-Disposition': 'attachment; filename=logo.png'
        }
      });
    }
  } catch (error) {
    console.error('Error processing logo:', error);
    return new Response('Error al procesar el logo', { status: 500 });
  }
}; 