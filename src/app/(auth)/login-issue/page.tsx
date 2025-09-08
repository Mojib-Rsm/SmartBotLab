'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

export default function LoginIssuePage() {
    return (
        <div className="w-full">
            <Link href="/login" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6">
                <ChevronLeft size={16} />
                Back to login
            </Link>
            <h1 className="text-2xl font-bold mb-2">Login issues</h1>
            <p className="text-muted-foreground mb-6">
                If you're having trouble logging in, please try the options below or contact our support team for assistance.
            </p>

            <div className="grid gap-4">
                <Button variant="outline" asChild>
                    <Link href="/lost-password">I forgot my password</Link>
                </Button>
                <Button variant="outline" asChild>
                     <Link href="/resend-verification">I didn't receive a verification email</Link>
                </Button>
                 <Button variant="outline" asChild>
                    <Link href="/contact-support">Contact Support</Link>
                </Button>
            </div>
        </div>
    );
}

    