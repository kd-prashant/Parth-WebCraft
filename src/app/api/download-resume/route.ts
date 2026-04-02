import { NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

export async function GET() {
  const filePath = join(process.cwd(), 'public', 'Prashant_Kandapal_Resume.pdf');
  const fileBuffer = readFileSync(filePath);
  const uint8Array = new Uint8Array(fileBuffer);

  return new NextResponse(uint8Array, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="Prashant_Kandapal_Resume.pdf"',
    },
  });
}
