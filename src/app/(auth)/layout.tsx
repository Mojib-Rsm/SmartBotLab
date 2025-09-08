import { Logo } from '@/components/logo';
import Image from 'next/image';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen">
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-md">
            <div className="mb-8">
             <Logo />
            </div>
            {children}
        </div>
      </div>
      <div className="hidden lg:flex lg:w-1/2 bg-primary text-primary-foreground flex-col items-center justify-center p-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative z-10 text-center">
            <div className="mb-6">
                <Image src="/smartbotlab.png" alt="SmartBotLab Logo" width={140} height={40} className="mx-auto" />
            </div>
          <h1 className="text-5xl font-bold">Connect apps</h1>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mt-2">#withSmartBotLab</h2>
          <p className="mt-6 max-w-md text-lg text-primary-foreground/80">
            From tasks and workflows to apps and systems, build and automate anything in one powerful visual platform.
          </p>
          <p className="mt-8 text-sm text-primary-foreground/60">
            Trusted by 500,000+ Makers | Free forever
          </p>
        </div>
      </div>
    </main>
  );
}
