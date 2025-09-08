import { NextRequest, NextResponse } from 'next/server';
import { pool } from '@/lib/db';

// GET all users
export async function GET() {
  try {
    const result = await pool.query('SELECT id, name, email, role, created_at FROM users ORDER BY created_at DESC');
    return NextResponse.json(result.rows);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// POST new user
export async function POST(req: NextRequest) {
  try {
    const { name, email, password, role } = await req.json();
    // In a real app, hash the password before saving
    const result = await pool.query(
      'INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING id, name, email, role, created_at',
      [name, email, password, role || 'user']
    );
    return NextResponse.json(result.rows[0]);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// PUT (update) a user
export async function PUT(req: NextRequest) {
  try {
    const { id, name, email, role } = await req.json();
    if (!id) {
        return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }
    const result = await pool.query(
      'UPDATE users SET name=$1, email=$2, role=$3 WHERE id=$4 RETURNING id, name, email, role, created_at',
      [name, email, role, id]
    );
    if (result.rows.length === 0) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    return NextResponse.json(result.rows[0]);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// DELETE a user
export async function DELETE(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');
        if (!id) {
            return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
        }
        const result = await pool.query('DELETE FROM users WHERE id=$1 RETURNING id', [id]);
        if (result.rows.length === 0) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }
        return NextResponse.json({ message: 'User deleted successfully', deletedUserId: result.rows[0].id });
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
