import { NextRequest, NextResponse } from 'next/server';
import { pool } from '@/lib/db';

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
