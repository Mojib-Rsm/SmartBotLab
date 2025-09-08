import { BrainCircuit } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/dashboard" className={cn("flex items-center gap-2", className)}>
      <BrainCircuit className="h-6 w-6 text-primary" />
      <span className="hidden text-lg font-bold tracking-tight text-foreground sm:inline-block">
        SmartBotLab
      </span>
    </Link>
  );
}
