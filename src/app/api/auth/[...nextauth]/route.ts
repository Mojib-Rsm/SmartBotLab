import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: Number(process.env.PG_PORT) || 5432,
});

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile }) {
      if (!user.email) {
        return false;
      }
      try {
        const client = await pool.connect();
        // Check if user already exists
        const { rows } = await client.query('SELECT * FROM users WHERE email = $1', [user.email]);
        
        if (rows.length === 0) {
          // If user doesn't exist, create a new user
          // Note: NextAuth doesn't provide a password, so you might need to handle this.
          // For social logins, a password might not be necessary.
          await client.query(
            'INSERT INTO users (name, email, password) VALUES ($1, $2, $3)',
            [user.name, user.email, 'social_login_no_password'] // Placeholder for password
          );
        }
        client.release();
        return true;
      } catch (error) {
        console.error('Error during sign in:', error);
        return false;
      }
    },
    async session({ session, token }) {
      // You can add user ID or role to the session token here if needed
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
});

export { handler as GET, handler as POST };
