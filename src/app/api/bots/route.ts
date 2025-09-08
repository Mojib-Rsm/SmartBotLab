import { Pool } from 'pg';
import { NextRequest, NextResponse } from 'next/server';

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: Number(process.env.PG_PORT) || 5432,
});

export async function GET(req: NextRequest) {
  try {
    const result = await pool.query('SELECT * FROM bots');
    return NextResponse.json(result.rows, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, page_id, purpose, language } = await req.json();
    const result = await pool.query(
      'INSERT INTO bots (name, page_id, status, messages_sent, users_interacted, purpose, language) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [name, page_id, 'inactive', 0, 0, purpose, language]
    );
    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
