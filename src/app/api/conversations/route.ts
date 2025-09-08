import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: Number(process.env.PG_PORT) || 5432,
});

// GET all conversations for a bot
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const bot_id = searchParams.get('bot_id');
  if (!bot_id) {
    return NextResponse.json({ error: 'Bot ID is required' }, { status: 400 });
  }
  try {
    const result = await pool.query('SELECT * FROM conversations WHERE bot_id = $1 ORDER BY created_at DESC', [bot_id]);
    return NextResponse.json(result.rows);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// POST new conversation
export async function POST(req: NextRequest) {
  try {
    const { bot_id, user_message, bot_response } = await req.json();
    const result = await pool.query(
      'INSERT INTO conversations (bot_id, user_message, bot_response) VALUES ($1, $2, $3) RETURNING *',
      [bot_id, user_message, bot_response]
    );
    return NextResponse.json(result.rows[0]);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
