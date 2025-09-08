'use client';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const GoogleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.98 12.18c0-.83-.07-1.62-.2-2.38H12v4.51h5.04c-.2 1.44-.83 2.66-1.73 3.52v3.01h3.86c2.26-2.09 3.56-5.17 3.56-8.66z" />
        <path d="M12 21c3.13 0 5.74-1.04 7.65-2.82l-3.86-3.01c-1.04.7-2.36 1.11-3.79 1.11-2.9 0-5.36-1.96-6.24-4.59H1.92v3.1c1.8 3.57 5.27 6.18 9.08 6.18z" />
        <path d="M5.76 14.3c-.2-.59-.31-1.22-.31-1.88s.11-1.29.31-1.88V7.43H1.92C.7 9.56 0 12.12 0 15c0 2.88.7 5.44 1.92 7.57l3.84-3.1z" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.29-3.29C17.74 1.24 15.13 0 12 0 8.19 0 4.73 2.61 2.92 6.18l3.84 3.1C7.64 6.84 9.1 5.38 12 5.38z" />
    </svg>
);

const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-blue-600">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
);

const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
);


export default function LoginPage() {
    return (
        <div className="w-full">
            <h1 className="text-2xl font-bold mb-2">Welcome Back!</h1>
            <p className="text-muted-foreground mb-6">Log in to your account to continue.</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <Button variant="outline" className="w-full" onClick={() => signIn('google', { callbackUrl: '/dashboard' })}>
                    <GoogleIcon />
                    <span className="ml-2">Google</span>
                </Button>
                <Button variant="outline" className="w-full" onClick={() => signIn('facebook', { callbackUrl: '/dashboard' })}>
                    <FacebookIcon />
                </Button>
                <Button variant="outline" className="w-full">
                    <GithubIcon />
                </Button>
            </div>

            <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                        Or log in with your email
                    </span>
                </div>
            </div>

            <form className="grid gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="m@example.com" required />
                </div>
                <div className="grid gap-2">
                    <div className="flex items-center">
                        <Label htmlFor="password">Password</Label>
                        <Link href="#" className="ml-auto inline-block text-sm text-primary underline">
                            Forgot your password?
                        </Link>
                    </div>
                    <Input id="password" type="password" required />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 mt-4 rounded-lg">
                   <Link href="/dashboard" className="w-full h-full flex items-center justify-center">Log In</Link>
                </Button>
            </form>
            <div className="mt-6 text-center text-sm">
                Don&apos;t have an account?{' '}
                <Link href="/signup" className="font-semibold text-primary underline">
                    Click here to sign up.
                </Link>
            </div>
        </div>
    );
}