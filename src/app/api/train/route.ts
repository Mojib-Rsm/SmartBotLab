import { NextRequest, NextResponse } from 'next/server';
import { pool } from '@/lib/db';
import { trainOnContent } from '@/ai/flows/train-on-content';

// This is a simplified implementation. A production system would need more robust error handling,
// file type validation, and security measures (e.g., checking for malicious files/links).
// It would also handle large files and long-running training jobs asynchronously.

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get('content-type') || '';
    let type: 'website' | 'youtube' | 'file';
    let source: string;
    let fileName: string | undefined;

    if (contentType.includes('application/json')) {
      const body = await req.json();
      type = body.type;
      source = body.source;
      if (!type || !source || type === 'file') {
        return NextResponse.json({ error: 'Invalid request body for JSON.' }, { status: 400 });
      }
    } else if (contentType.includes('multipart/form-data')) {
      const formData = await req.formData();
      const file = formData.get('file') as File | null;
      
      if (!file) {
        return NextResponse.json({ error: 'No file found in the form data.' }, { status: 400 });
      }
      type = 'file';
      // For file uploads, the 'source' will be the file content itself.
      source = await file.text();
      fileName = file.name;
    } else {
        return NextResponse.json({ error: 'Unsupported content type.' }, { status: 415 });
    }

    // Call the AI flow to process the content
    const trainingResult = await trainOnContent({ type, source, fileName });

    if (!trainingResult.extractedText) {
      return NextResponse.json({ error: 'Failed to extract text from the source.' }, { status: 500 });
    }
    
    // Store the extracted text in the knowledge base
    const result = await pool.query(
      'INSERT INTO knowledge_base (type, content, source_url) VALUES ($1, $2, $3) RETURNING *',
      [type, trainingResult.extractedText, trainingResult.sourceUrl]
    );

    return NextResponse.json({
      message: 'Training data added to knowledge base successfully.',
      data: result.rows[0],
    }, { status: 201 });

  } catch (err: any) {
    console.error('Training API Error:', err);
    return NextResponse.json({ error: err.message || 'An unknown error occurred.' }, { status: 500 });
  }
}
