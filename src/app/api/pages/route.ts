import { NextRequest, NextResponse } from 'next/server';
import { pool } from '@/lib/db';

// GET all pages
export async function GET() {
  try {
    const result = await pool.query('SELECT * FROM pages ORDER BY created_at DESC');
    return NextResponse.json(result.rows);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// POST new page
export async function POST(req: NextRequest) {
  try {
    const { user_id, title, page_id_fb } = await req.json();
    const result = await pool.query(
      'INSERT INTO pages (user_id, title, page_id_fb) VALUES ($1, $2, $3) RETURNING *',
      [user_id, title, page_id_fb]
    );
    return NextResponse.json(result.rows[0]);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// PUT (update) a page
export async function PUT(req: NextRequest) {
  try {
    const { id, title } = await req.json();
     if (!id) {
        return NextResponse.json({ error: 'Page ID is required' }, { status: 400 });
    }
    const result = await pool.query(
      'UPDATE pages SET title=$1 WHERE id=$2 RETURNING *',
      [title, id]
    );
    if (result.rows.length === 0) {
        return NextResponse.json({ error: 'Page not found' }, { status: 404 });
    }
    return NextResponse.json(result.rows[0]);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// DELETE a page
export async function DELETE(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');
        if (!id) {
            return NextResponse.json({ error: 'Page ID is required' }, { status: 400 });
        }
        const result = await pool.query('DELETE FROM pages WHERE id=$1 RETURNING id', [id]);
        if (result.rows.length === 0) {
            return NextResponse.json({ error: 'Page not found' }, { status: 404 });
        }
        return NextResponse.json({ message: 'Page deleted successfully', deletedPageId: result.rows[0].id });
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
