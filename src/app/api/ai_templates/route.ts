import { NextRequest, NextResponse } from 'next/server';
import { pool } from '@/lib/db';

// GET all templates
export async function GET() {
  try {
    const result = await pool.query('SELECT * FROM ai_templates ORDER BY name');
    return NextResponse.json(result.rows);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// POST new template
export async function POST(req: NextRequest) {
  try {
    const { name, type, content, language } = await req.json();
    const result = await pool.query(
      'INSERT INTO ai_templates (name, type, content, language) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, type, content, language]
    );
    return NextResponse.json(result.rows[0]);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// PUT (update) a template
export async function PUT(req: NextRequest) {
  try {
    const { id, name, type, content, language } = await req.json();
    if (!id) {
        return NextResponse.json({ error: 'Template ID is required' }, { status: 400 });
    }
    const result = await pool.query(
      'UPDATE ai_templates SET name=$1, type=$2, content=$3, language=$4 WHERE id=$5 RETURNING *',
      [name, type, content, language, id]
    );
    if (result.rows.length === 0) {
        return NextResponse.json({ error: 'Template not found' }, { status: 404 });
    }
    return NextResponse.json(result.rows[0]);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// DELETE a template
export async function DELETE(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');
        if (!id) {
            return NextResponse.json({ error: 'Template ID is required' }, { status: 400 });
        }
        const result = await pool.query('DELETE FROM ai_templates WHERE id=$1 RETURNING id', [id]);
        if (result.rows.length === 0) {
            return NextResponse.json({ error: 'Template not found' }, { status: 404 });
        }
        return NextResponse.json({ message: 'Template deleted successfully', deletedTemplateId: result.rows[0].id });
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
