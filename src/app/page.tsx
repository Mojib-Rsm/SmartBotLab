
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, Bot, Check, MessageSquare, Plus, Zap } from 'lucide-react';
import { Logo } from '@/components/logo';

const integrations = [
    { name: 'OpenAI (ChatGPT)', icon: <Zap className="h-8 w-8" /> },
    { name: 'Gmail', icon: <MessageSquare className="h-8 w-8" /> },
    { name: 'Google Sheets', icon: <Bot className="h-8 w-8" /> },
    { name: 'Slack', icon: <Zap className="h-8 w-8" /> },
    { name: 'Telegram Bot', icon: <MessageSquare className="h-8 w-8" /> },
    { name: 'Notion', icon: <Bot className="h-8 w-8" /> },
    { name: 'HubSpot CRM', icon: <Zap className="h-8 w-8" /> },
    { name: 'Google Drive', icon: <MessageSquare className="h-8 w-8" /> },
    { name: 'WordPress', icon: <Bot className="h-8 w-8" /> },
    { name: 'Shopify', icon: <Zap className="h-8 w-8" /> },
];

const templates = [
    { title: 'Send messages on Facebook Messenger using a ChatGPT assistant', apps: ['Facebook Messenger', 'OpenAI (ChatGPT)'] },
    { title: 'Automatically translate new Facebook Messenger messages with DeepL', apps: ['Facebook Messenger', 'DeepL'] },
    { title: 'Send a Slack notification for new Facebook Messenger messages', apps: ['Facebook Messenger', 'Slack'] },
    { title: 'Add new Facebook Messenger messages to Trello as cards', apps: ['Facebook Messenger', 'Trello'] },
];

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
          <Logo />
          <nav className="hidden items-center gap-6 text-sm md:flex">
             <Link href="#features" className="text-muted-foreground transition-colors hover:text-foreground">Features</Link>
             <Link href="#integrations" className="text-muted-foreground transition-colors hover:text-foreground">Integrations</Link>
             <Link href="#templates" className="text-muted-foreground transition-colors hover:text-foreground">Templates</Link>
             <Link href="#faq" className="text-muted-foreground transition-colors hover:text-foreground">FAQ</Link>
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
        <section className="w-full py-20 md:py-28 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-primary font-medium">
                    Facebook Messenger Automation
                  </div>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                    Connect Facebook Messenger with your favorite apps
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Design, build, and automate anything for your work by integrating apps like Facebook Messenger to create visual automated workflows. No coding required.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Button asChild size="lg">
                        <Link href="/signup">
                        Get Started Free
                        <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
                 <p className="text-xs text-muted-foreground">
                    No credit card required. No time limit on Free plan.
                </p>
              </div>
              <img
                src="https://picsum.photos/600/400"
                width="600"
                height="400"
                alt="Hero"
                data-ai-hint="abstract illustration"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>

        <section id="integrations" className="w-full py-12 md:py-24 bg-muted">
            <div className="container">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Connect Any App with Facebook Messenger</h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-lg">
                        Choose from thousands of ready-made apps or use our no-code toolkit to connect to apps not yet in our library.
                    </p>
                </div>
                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {integrations.map((app, index) => (
                        <Card key={index} className="flex items-center p-4 gap-4 hover:shadow-lg transition-shadow">
                            {app.icon}
                            <p className="font-medium">{app.name}</p>
                        </Card>
                    ))}
                </div>
                <div className="text-center mt-8">
                     <Button variant="outline">Load More</Button>
                </div>
            </div>
        </section>

        <section id="templates" className="w-full py-12 md:py-24">
            <div className="container">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Popular Facebook Messenger Workflows</h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-lg">
                        Looking to get more out of Facebook Messenger? Try any of these templates in just a few clicks.
                    </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                    {templates.map((template, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <div className="flex items-center gap-2 mb-2">
                                    {template.apps.map((app, appIndex) => (
                                        <div key={appIndex} className="flex items-center gap-2">
                                            <Bot className="h-6 w-6" />
                                            {appIndex < template.apps.length -1 && <Plus className="h-4 w-4 text-muted-foreground" />}
                                        </div>
                                    ))}
                                </div>
                                <CardTitle>{template.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Button>Try It <ArrowRight className="ml-2 h-4 w-4"/></Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        <section id="faq" className="w-full py-12 md:py-24 bg-muted">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-8 font-headline">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I get started with SmartBotLab?</AccordionTrigger>
                <AccordionContent>
                  Getting started is easy! Just sign up for a free account, connect your Facebook page, and choose a template. You can have your first bot running in under 5 minutes without writing any code.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What is a workflow or scenario?</AccordionTrigger>
                <AccordionContent>
                  A workflow (or scenario) is an automated process you create in SmartBotLab. It consists of a trigger (e.g., a new message) and one or more actions (e.g., reply with AI, add data to Google Sheets).
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can I connect apps that are not in your library?</AccordionTrigger>
                <AccordionContent>
                  Yes! Our no-code toolkit and HTTP module allow you to connect to almost any web service or API, giving you unlimited integration possibilities.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
