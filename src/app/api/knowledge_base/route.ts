import { NextRequest, NextResponse } from 'next/server';
import { pool } from '@/lib/db';

// GET all knowledge base items
export async function GET() {
  try {
    const result = await pool.query('SELECT id, type, LEFT(content, 100) as preview, source_url, created_at FROM knowledge_base ORDER BY created_at DESC');
    return NextResponse.json(result.rows);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// POST is handled by the /api/train route which is more specific.
// This route could be extended to allow direct text insertion if needed.

// DELETE a knowledge base item
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) {
        return NextResponse.json({ error: 'Knowledge base item ID is required' }, { status: 400 });
    }
    const result = await pool.query('DELETE FROM knowledge_base WHERE id=$1 RETURNING id', [id]);
    if (result.rows.length === 0) {
        return NextResponse.json({ error: 'Item not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Knowledge base item deleted successfully', deletedItemId: result.rows[0].id });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
