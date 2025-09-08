import { NextRequest, NextResponse } from 'next/server';
import { pool } from '@/lib/db';

// GET all logs for a specific bot
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const bot_id = searchParams.get('bot_id');

  if (!bot_id) {
    return NextResponse.json({ error: 'Bot ID is required' }, { status: 400 });
  }

  try {
    const result = await pool.query('SELECT * FROM bot_logs WHERE bot_id = $1 ORDER BY created_at DESC', [bot_id]);
    return NextResponse.json(result.rows);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// POST new log entry
export async function POST(req: NextRequest) {
  try {
    const { bot_id, event_type, details } = await req.json();

    if (!bot_id || !event_type) {
        return NextResponse.json({ error: 'Bot ID and event type are required' }, { status: 400 });
    }
    
    const result = await pool.query(
      'INSERT INTO bot_logs (bot_id, event_type, details) VALUES ($1, $2, $3) RETURNING *',
      [bot_id, event_type, details]
    );
    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
