import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: Number(process.env.PG_PORT) || 5432,
});

// GET all bots
export async function GET() {
  try {
    const result = await pool.query('SELECT * FROM bots ORDER BY created_at DESC');
    return NextResponse.json(result.rows);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// POST new bot
export async function POST(req: NextRequest) {
  try {
    const { user_id, page_id, name, purpose, status } = await req.json();
    const result = await pool.query(
      'INSERT INTO bots (user_id, page_id, name, purpose, status) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [user_id, page_id, name, purpose, status]
    );
    return NextResponse.json(result.rows[0]);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// PUT (update) a bot
export async function PUT(req: NextRequest) {
  try {
    const { id, name, purpose, status } = await req.json();
    if (!id) {
        return NextResponse.json({ error: 'Bot ID is required' }, { status: 400 });
    }
    const result = await pool.query(
      'UPDATE bots SET name=$1, purpose=$2, status=$3 WHERE id=$4 RETURNING *',
      [name, purpose, status, id]
    );
    if (result.rows.length === 0) {
        return NextResponse.json({ error: 'Bot not found' }, { status: 404 });
    }
    return NextResponse.json(result.rows[0]);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// DELETE a bot
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) {
        return NextResponse.json({ error: 'Bot ID is required' }, { status: 400 });
    }
    const result = await pool.query('DELETE FROM bots WHERE id=$1 RETURNING id', [id]);
    if (result.rows.length === 0) {
        return NextResponse.json({ error: 'Bot not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Bot deleted successfully', deletedBotId: result.rows[0].id });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}