import { NextRequest, NextResponse } from 'next/server';
import { pool } from '@/lib/db';

// GET all roles
export async function GET() {
  try {
    const result = await pool.query('SELECT * FROM roles ORDER BY name');
    return NextResponse.json(result.rows);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// POST new role
export async function POST(req: NextRequest) {
  try {
    const { name, description } = await req.json();
    const result = await pool.query(
      'INSERT INTO roles (name, description) VALUES ($1, $2) RETURNING *',
      [name, description]
    );
    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (err: any) {
    if (err.code === '23505') { // unique_violation
        return NextResponse.json({ error: `Role with name '${name}' already exists.` }, { status: 409 });
    }
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// PUT (update) a role
export async function PUT(req: NextRequest) {
    try {
        const { id, name, description } = await req.json();
        if (!id) {
            return NextResponse.json({ error: 'Role ID is required' }, { status: 400 });
        }
        const result = await pool.query(
            'UPDATE roles SET name=$1, description=$2 WHERE id=$3 RETURNING *',
            [name, description, id]
        );
        if (result.rows.length === 0) {
            return NextResponse.json({ error: 'Role not found' }, { status: 404 });
        }
        return NextResponse.json(result.rows[0]);
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}

// DELETE a role
export async function DELETE(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');
        if (!id) {
            return NextResponse.json({ error: 'Role ID is required' }, { status: 400 });
        }
        // Before deleting a role, you might want to handle users or permissions associated with it.
        // For simplicity, we are just deleting the role here.
        const result = await pool.query('DELETE FROM roles WHERE id=$1 RETURNING id', [id]);
        if (result.rows.length === 0) {
            return NextResponse.json({ error: 'Role not found' }, { status: 404 });
        }
        return NextResponse.json({ message: 'Role deleted successfully', deletedRoleId: result.rows[0].id });
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
