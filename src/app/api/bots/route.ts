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
    const { name, page_id, status } = await req.json();
    const result = await pool.query(
      'INSERT INTO bots (name, page_id, status, messages_sent, users_interacted, purpose, language) VALUES ($1, $2, $3, 0, 0, \'N/A\', \'en\') RETURNING *',
      [name, page_id, status ? 'active' : 'inactive']
    );
    return NextResponse.json(result.rows[0]);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
