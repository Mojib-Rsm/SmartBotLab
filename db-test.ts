require('dotenv').config(); // যদি .env ব্যবহার করি
import { Pool } from 'pg';

// PostgreSQL connection settings
const pool = new Pool({
  user: process.env.PG_USER || 'postgres',       // DB user
  host: process.env.PG_HOST || 'localhost',     // DB host
  database: process.env.PG_DATABASE || 'mydb',  // DB name
  password: process.env.PG_PASSWORD || 'password', // DB password
  port: Number(process.env.PG_PORT) || 5432,           // DB port
});

// Connect and test
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Connection Error:', err.stack);
  }
  console.log('Connected to PostgreSQL database successfully!');

  // Example query
  client.query('SELECT NOW()', (err, result) => {
    release(); // release the client back to the pool
    if (err) {
      return console.error('Query Error:', err.stack);
    }
    console.log('Server time:', result.rows[0]);
    process.exit(0); // exit after query
  });
});
