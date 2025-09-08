import { NextRequest, NextResponse } from 'next/server';
import { pool } from '@/lib/db';

// GET all feedback for a specific bot
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const bot_id = searchParams.get('bot_id');

  if (!bot_id) {
    return NextResponse.json({ error: 'Bot ID is required' }, { status: 400 });
  }

  try {
    const result = await pool.query('SELECT * FROM bot_feedback WHERE bot_id = $1 ORDER BY created_at DESC', [bot_id]);
    return NextResponse.json(result.rows);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// POST new feedback
export async function POST(req: NextRequest) {
  try {
    const { bot_id, user_id, rating, comment } = await req.json();

    if (!bot_id || rating === undefined) {
        return NextResponse.json({ error: 'Bot ID and rating are required' }, { status: 400 });
    }
    // Assuming rating is an integer and comment is text. user_id can be null.
    const result = await pool.query(
      'INSERT INTO bot_feedback (bot_id, user_id, rating, comment) VALUES ($1, $2, $3, $4) RETURNING *',
      [bot_id, user_id, rating, comment]
    );
    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
