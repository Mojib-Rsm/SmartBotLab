
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Bot, Zap, MessageSquare } from 'lucide-react';
import { Logo } from '@/components/logo';

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
          <Logo />
          <nav className="flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Get Started Free</Link>
            </Button>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 lg:py-40 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                    Build AI Chatbots for Your Business in Minutes
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    SmartBotLab helps you create intelligent, automated chatbots for your Facebook pages without any coding. Engage customers, answer questions, and grow your business.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/signup">
                      Create Your First Bot
                    </Link>
                  </Button>
                   <Button asChild variant="outline" size="lg">
                    <Link href="#">
                      See a Demo
                    </Link>
                  </Button>
                </div>
              </div>
               <img
                src="https://picsum.photos/600/400"
                width="600"
                height="400"
                alt="Hero"
                data-ai-hint="chatbot illustration"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>

        <section id="features" className="w-full bg-muted py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Everything You Need to Succeed</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform is packed with features to help you build powerful and effective chatbots for any purpose.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-16 mt-12">
              <div className="grid gap-1">
                <Bot className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-bold">AI-Powered Templates</h3>
                <p className="text-sm text-muted-foreground">Start with pre-built templates for FAQ, Customer Support, E-commerce, and more. Customize them to fit your needs.</p>
              </div>
              <div className="grid gap-1">
                <Zap className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-bold">Instant Setup</h3>
                <p className="text-sm text-muted-foreground">Connect your Facebook page and get your first bot running in under 5 minutes. No code required.</p>
              </div>
              <div className="grid gap-1">
                <MessageSquare className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-bold">Automated Responses</h3>
                <p className="text-sm text-muted-foreground">Let the AI generate initial responses based on your page content, saving you time and effort.</p>
              </div>
               <div className="grid gap-1">
                <CheckCircle className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-bold">Multi-Language Support</h3>
                <p className="text-sm text-muted-foreground">Engage with your audience in their native language with our built-in translation capabilities.</p>
              </div>
               <div className="grid gap-1">
                <CheckCircle className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-bold">Easy Management</h3>
                <p className="text-sm text-muted-foreground">A simple and intuitive dashboard to manage all your bots, conversations, and settings in one place.</p>
              </div>
               <div className="grid gap-1">
                <CheckCircle className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-bold">Analytics & Insights</h3>
                <p className="text-sm text-muted-foreground">Track your bot's performance with key metrics to understand user interaction and improve responses.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
                <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">
                    Ready to Automate Your Customer Interactions?
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Join thousands of businesses who are already using AI to enhance their customer experience.
                </p>
                </div>
                <div className="mx-auto w-full max-w-sm space-y-2">
                   <Button asChild size="lg" className="w-full">
                    <Link href="/signup">
                      Get Started For Free
                    </Link>
                  </Button>
                <p className="text-xs text-muted-foreground">
                    No credit card required. Start building your bot today.
                </p>
                </div>
            </div>
        </section>
      </main>
       <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-muted-foreground">&copy; 2024 SmartBotLab. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
              Privacy
            </Link>
          </nav>
        </footer>
    </div>
  );
}
