import { NextRequest, NextResponse } from 'next/server';
import { pool } from '@/lib/db';

// GET notifications for a user
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const user_id = searchParams.get('user_id');

  if (!user_id) {
    return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
  }

  try {
    const result = await pool.query('SELECT * FROM notifications WHERE user_id = $1 ORDER BY created_at DESC', [user_id]);
    return NextResponse.json(result.rows);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// POST a new notification
export async function POST(req: NextRequest) {
  try {
    const { user_id, message, type } = await req.json();

    if (!user_id || !message) {
        return NextResponse.json({ error: 'User ID and message are required' }, { status: 400 });
    }
    
    const result = await pool.query(
      'INSERT INTO notifications (user_id, message, type) VALUES ($1, $2, $3) RETURNING *',
      [user_id, message, type]
    );
    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// PUT (update notification status, e.g., mark as read)
export async function PUT(req: NextRequest) {
    try {
        const { id, read } = await req.json();

        if (!id) {
            return NextResponse.json({ error: 'Notification ID is required' }, { status: 400 });
        }
        
        const result = await pool.query(
            'UPDATE notifications SET is_read = $1, read_at = CASE WHEN $1 = TRUE THEN NOW() ELSE NULL END WHERE id = $2 RETURNING *',
            [read, id]
        );

        if (result.rows.length === 0) {
            return NextResponse.json({ error: 'Notification not found' }, { status: 404 });
        }
        return NextResponse.json(result.rows[0]);
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
