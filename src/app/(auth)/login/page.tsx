'use client';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const GoogleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.98 12.18c0-.83-.07-1.62-.2-2.38H12v4.51h5.04c-.2 1.44-.83 2.66-1.73 3.52v3.01h3.86c2.26-2.09 3.56-5.17 3.56-8.66z" />
    <path d="M12 21c3.13 0 5.74-1.04 7.65-2.82l-3.86-3.01c-1.04.7-2.36 1.11-3.79 1.11-2.9 0-5.36-1.96-6.24-4.59H1.92v3.1c1.8 3.57 5.27 6.18 9.08 6.18z" />
    <path d="M5.76 14.3c-.2-.59-.31-1.22-.31-1.88s.11-1.29.31-1.88V7.43H1.92C.7 9.56 0 12.12 0 15c0 2.88.7 5.44 1.92 7.57l3.84-3.1z" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.29-3.29C17.74 1.24 15.13 0 12 0 8.19 0 4.73 2.61 2.92 6.18l3.84 3.1C7.64 6.84 9.1 5.38 12 5.38z" />
  </svg>
);

const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function LoginPage() {
  return (
    <Card className="mx-auto w-full max-w-sm shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold font-headline">
          Welcome Back
        </CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link
                href="#"
                className="ml-auto inline-block text-sm underline"
              >
                Forgot your password?
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full" asChild>
            <Link href="/dashboard">Login</Link>
          </Button>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <Button variant="outline" onClick={() => signIn('google', { callbackUrl: '/dashboard' })}>
              <GoogleIcon />&nbsp;Google
            </Button>
            <Button variant="outline" onClick={() => signIn('facebook', { callbackUrl: '/dashboard' })}>
              <FacebookIcon />&nbsp;Facebook
            </Button>
          </div>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
