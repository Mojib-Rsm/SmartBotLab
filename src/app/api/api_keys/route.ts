import { NextRequest, NextResponse } from 'next/server';
import { pool } from '@/lib/db';

// This route manages API keys for external services like OpenAI, Google AI, etc.
// NOTE: API keys are sensitive data. In a production environment,
// they should be encrypted at rest and handled with extreme care.

// GET API keys for a specific user
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const user_id = searchParams.get('user_id');

  if (!user_id) {
    return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
  }

  try {
    // Select all fields except the api_key for security, or maybe return partial keys.
    // For an admin UI, you might need to fetch them but handle with care.
    // This example fetches all data, assuming it's for a secure admin panel.
    const result = await pool.query('SELECT * FROM api_keys WHERE user_id = $1', [user_id]);
    return NextResponse.json(result.rows);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// POST a new API key
export async function POST(req: NextRequest) {
  try {
    const { user_id, service_name, api_key } = await req.json();

    if (!user_id || !service_name || !api_key) {
        return NextResponse.json({ error: 'User ID, service name, and API key are required' }, { status: 400 });
    }

    // In a real app, you MUST encrypt the api_key before storing it.
    const result = await pool.query(
      'INSERT INTO api_keys (user_id, service_name, api_key) VALUES ($1, $2, $3) RETURNING id, user_id, service_name, created_at',
      [user_id, service_name, api_key]
    );
    // Note: We are not returning the key in the response for security.
    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (err: any) {
    // Handle unique constraint violation (e.g., key for user_id/service_name already exists)
    if (err.code === '23505') {
        return NextResponse.json({ error: `An API key for ${err.detail.match(/\((.*?)\)/)[1]} already exists.` }, { status: 409 });
    }
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// PUT (update) an API key
export async function PUT(req: NextRequest) {
    try {
        const { id, api_key } = await req.json();

        if (!id || !api_key) {
            return NextResponse.json({ error: 'Key ID and new API key are required' }, { status: 400 });
        }
        
        // Again, encrypt the api_key before updating.
        const result = await pool.query(
            'UPDATE api_keys SET api_key = $1, updated_at = NOW() WHERE id = $2 RETURNING id, user_id, service_name, updated_at',
            [api_key, id]
        );
        if (result.rows.length === 0) {
            return NextResponse.json({ error: 'API key not found' }, { status: 404 });
        }
        return NextResponse.json(result.rows[0]);
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}

// DELETE an API key
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
        return NextResponse.json({ error: 'API Key ID is required' }, { status: 400 });
    }

    const result = await pool.query('DELETE FROM api_keys WHERE id = $1 RETURNING id', [id]);
    
    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'API key not found' }, { status: 404 });
    }
    
    return NextResponse.json({ message: 'API key deleted successfully', deletedKeyId: result.rows[0].id });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
