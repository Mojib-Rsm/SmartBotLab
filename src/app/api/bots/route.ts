import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: Number(process.env.PG_PORT) || 5432,
});

export async function GET() {
  try {
    const result = await pool.query('SELECT * FROM bots ORDER BY id DESC');
    return NextResponse.json(result.rows);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, page_id, purpose, user_id, status } = await req.json();
    const result = await pool.query(
      'INSERT INTO bots (name, page_id, purpose, user_id, status) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, page_id, purpose, user_id, status]
    );
    return NextResponse.json(result.rows[0]);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { id, name, status } = await req.json();
    const result = await pool.query(
      'UPDATE bots SET name=$1, status=$2 WHERE id=$3 RETURNING *',
      [name, status, id]
    );
    return NextResponse.json(result.rows[0]);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    const result = await pool.query('DELETE FROM bots WHERE id=$1 RETURNING *', [id]);
    return NextResponse.json(result.rows[0]);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
