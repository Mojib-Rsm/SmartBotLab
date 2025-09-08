'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ChevronLeft } from 'lucide-react';

export default function LostPasswordPage() {
    return (
        <div className="w-full">
            <Link href="/login" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6">
                <ChevronLeft size={16} />
                Back to login
            </Link>
            <h1 className="text-2xl font-bold mb-2">Lost password</h1>
            <p className="text-muted-foreground mb-6">
                You can change your password using the form below. We will then send you a link where to set a new password.
            </p>

            <form className="grid gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="email">Email <span className="text-destructive">*</span></Label>
                    <Input id="email" type="email" placeholder="Enter your email address" required />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-primary-foreground font-bold py-3 mt-4 rounded-lg">
                   Reset password
                </Button>
            </form>
        </div>
    );
}

    