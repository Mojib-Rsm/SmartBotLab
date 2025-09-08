
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Bot, Zap, MessageSquare, ArrowRight } from 'lucide-react';
import { Logo } from '@/components/logo';

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
          <Logo />
          <nav className="hidden items-center gap-6 text-sm md:flex">
             <Link href="#features" className="text-muted-foreground transition-colors hover:text-foreground">Features</Link>
             <Link href="#pricing" className="text-muted-foreground transition-colors hover:text-foreground">Pricing</Link>
             <Link href="#support" className="text-muted-foreground transition-colors hover:text-foreground">Support</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Get Started Free</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-24 md:py-32 lg:py-40">
          <div className="container px-4 text-center md:px-6">
            <div className="flex flex-col items-center space-y-6">
               <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-primary font-medium">
                Facebook Messenger Automation
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Build and Automate AI Chatbots Visually
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                SmartBotLab is a no-code platform to create intelligent, automated chatbots for your Facebook pages. Boost engagement and streamline conversations with AI.
              </p>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/signup">
                      Create Your First Bot <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                   <Button asChild size="lg" variant="outline">
                    <Link href="#features">
                      Explore Features
                    </Link>
                  </Button>
              </div>
            </div>
          </div>
        </section>
        
        <section className="w-full py-12 md:py-24">
            <div className="container">
                <div className="flex justify-center text-center mb-8">
                    <p className="text-sm uppercase text-muted-foreground tracking-widest">Trusted by leading companies worldwide</p>
                </div>
                <div className="mt-8 grid grid-cols-2 items-center justify-center gap-8 text-muted-foreground/60 sm:grid-cols-3 md:grid-cols-6">
                    <div className="flex justify-center text-lg font-semibold"><span>Company A</span></div>
                    <div className="flex justify-center text-lg font-semibold"><span>Startup B</span></div>
                    <div className="flex justify-center text-lg font-semibold"><span>Enterprise C</span></div>
                    <div className="flex justify-center text-lg font-semibold"><span>Brand D</span></div>
                    <div className="flex justify-center text-lg font-semibold"><span>Agency E</span></div>
                    <div className="flex justify-center text-lg font-semibold"><span>Studio F</span></div>
                </div>
            </div>
        </section>

        <section id="features" className="w-full bg-muted py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-primary font-medium">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Everything You Need for Automation</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform is packed with features to help you build powerful and effective chatbots for any purpose, without writing a single line of code.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-16 mt-12">
              <div className="grid gap-2">
                <Bot className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">AI-Powered Templates</h3>
                <p className="text-muted-foreground">Start with pre-built templates for FAQ, Customer Support, E-commerce, and more. Customize them to fit your needs.</p>
              </div>
              <div className="grid gap-2">
                <Zap className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">No-Code Bot Builder</h3>
                <p className="text-muted-foreground">Connect your Facebook page and get your first bot running in under 5 minutes with our visual editor.</p>
              </div>
              <div className="grid gap-2">
                <MessageSquare className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Knowledge Base Training</h3>
                <p className="text-muted-foreground">Train your bot on your own content—from websites, documents (PDF, DOCX), or even YouTube videos.</p>
              </div>
               <div className="grid gap-2">
                <CheckCircle className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Multi-Language Support</h3>
                <p className="text-muted-foreground">Engage with your audience in their native language with our built-in automatic translation capabilities.</p>
              </div>
               <div className="grid gap-2">
                <CheckCircle className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Easy Management</h3>
                <p className="text-muted-foreground">A simple and intuitive dashboard to manage all your bots, conversations, and settings in one place.</p>
              </div>
               <div className="grid gap-2">
                <CheckCircle className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Analytics & Insights</h3>
                <p className="text-muted-foreground">Track your bot's performance with key metrics to understand user interaction and improve responses.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-20 md:py-32">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
                <div className="space-y-4">
                <h2 className="text-4xl font-bold tracking-tighter md:text-5xl/tight font-headline">
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
                    No credit card required. 14-day free trial.
                </p>
                </div>
            </div>
        </section>
      </main>
       <footer className="border-t">
         <div className="container mx-auto py-12 px-4 md:px-6">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
              <div>
                  <h4 className="font-semibold mb-4">Product</h4>
                  <nav className="flex flex-col gap-2">
                      <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Features</Link>
                      <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Integrations</Link>
                      <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Pricing</Link>
                      <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Changelog</Link>
                  </nav>
              </div>
               <div>
                  <h4 className="font-semibold mb-4">Company</h4>
                  <nav className="flex flex-col gap-2">
                      <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">About</Link>
                      <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Careers</Link>
                      <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Blog</Link>
                      <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link>
                  </nav>
              </div>
              <div>
                  <h4 className="font-semibold mb-4">Resources</h4>
                   <nav className="flex flex-col gap-2">
                      <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Documentation</Link>
                      <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">API Reference</Link>
                      <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Support</Link>
                      <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Community</Link>
                  </nav>
              </div>
              <div>
                  <h4 className="font-semibold mb-4">Legal</h4>
                   <nav className="flex flex-col gap-2">
                      <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link>
                      <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link>
                      <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Cookie Policy</Link>
                  </nav>
              </div>
               <div className="col-span-2 md:col-span-1">
                 <Logo />
                 <p className="text-sm text-muted-foreground mt-4">&copy; 2024 SmartBotLab. All rights reserved.</p>
               </div>
            </div>
         </div>
       </footer>
    </div>
  );
}

    