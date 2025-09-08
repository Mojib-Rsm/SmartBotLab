import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Languages,
  Mail,
  MessageSquare,
  Zap,
} from 'lucide-react';
import { Logo } from '@/components/logo';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    name: 'Lidor Perez',
    company: 'Pisga, Israel',
    quote:
      'Loved building our non-profit educational bot for maker teachers here! Helps plan lessons, materials & assessment. This platform is great for creating valuable resources that enrich teaching!',
    image: 'https://picsum.photos/100/100?random=1',
  },
  {
    name: 'Kaori',
    company: 'Founder, Jhunnu Handicraft',
    quote:
      'SmartBotLab is amazing! It was so easy to set up—no coding needed. Anyone can use it. The chatbot works smoothly and answers questions instantly, making my website more helpful.',
    image: 'https://picsum.photos/100/100?random=2',
  },
  {
    name: 'Mark Gregory',
    company: "Founder, The Customer's Shoes Ltd",
    quote:
      'If Steve Jobs had designed a bot app, it would have been this one. Simply awesome!!',
    image: 'https://picsum.photos/100/100?random=3',
  },
];

const faqItems = [
  {
    question: 'How do Messenger chatbots work?',
    answer:
      'Our chatbots use AI to understand user messages within Facebook Messenger. They access the knowledge base you provide to formulate relevant, human-like responses and send them instantly.',
  },
  {
    question: 'Is it easy to set up a Messenger chatbot with SmartBotLab?',
    answer:
      'Yes! Our 3-step process (Train, Link, Use) makes it incredibly simple. You can have a custom chatbot running in under 2 minutes without writing a single line of code.',
  },
  {
    question: 'Can the chatbots also respond to comments?',
    answer:
      'Yes, you can configure your chatbot to automatically reply to comments on your Facebook posts, helping you engage with more users and capture leads.',
  },
  {
    question: 'Can my Messenger chatbots handle multiple languages?',
    answer:
      'Absolutely. Our chatbots support 95 languages, allowing you to communicate with your customers in their native language and provide a more personalized experience.',
  },
];

export default function LandingPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
          <Logo />
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <Link
              href="#features"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              How it Works
            </Link>
            <Link
              href="#testimonials"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Testimonials
            </Link>
            <Link
              href="#faq"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              FAQ
            </Link>
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
          <div className="container px-4 text-center md:px-6">
            <div className="flex flex-col items-center space-y-4">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-primary">
                Facebook Messenger AI Chatbot
              </div>
              <h1 className="bg-gradient-to-r from-primary to-accent bg-clip-text text-4xl font-bold tracking-tighter text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
                Build a Custom AI Chatbot for Messenger in Under 2 Minutes
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Start offering 24/7/365 support via Facebook Messenger with our
                simple integration.
              </p>
            </div>
            <div className="mt-8 flex flex-col justify-center gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/signup">
                  Sign Up Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              No credit card required.
            </p>
          </div>
        </section>

        <section
          id="how-it-works"
          className="w-full bg-muted py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                3 Simple Steps to Using Our Messenger AI ChatBots
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Offer instant, reliable responses via your Facebook Page using
                AI.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary">
                    01
                  </div>
                  <CardTitle className="mt-4">TRAIN</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Add any Website content, DOCX, TXT, PDF files, or even
                    YouTube videos to your chatbot's knowledge.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary">
                    02
                  </div>
                  <CardTitle className="mt-4">LINK</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Link your newly created custom chatbot to your business
                    Facebook Page.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary">
                    03
                  </div>
                  <CardTitle className="mt-4">USE</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Let your AI chatbot respond to incoming messages or reply to
                    comments like a real human, 24/7/365.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24">
          <div className="container">
            <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Messenger Customer Support Chatbots
              </h2>
            </div>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex gap-4">
                <div>
                  <BrainCircuit className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">CUSTOM KNOWLEDGE</h3>
                  <p className="mt-1 text-muted-foreground">
                    Add information about your business so the chatbot can
                    respond with accurate answers.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div>
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">24/7/365 AVAILABILITY</h3>
                  <p className="mt-1 text-muted-foreground">
                    Offer support via Messenger around the clock to gain more
                    sales and positive reviews.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div>
                  <MessageSquare className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">REPLY TO COMMENTS</h3>
                  <p className="mt-1 text-muted-foreground">
                    Your chatbot can also be set to respond to any comments your
                    posts receive too.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div>
                  <Bot className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">MULTIPLE CONVERSATIONS</h3>
                  <p className="mt-1 text-muted-foreground">
                    Your chatbot can deal with multiple concurrent
                    conversations, replacing the need for multiple agents.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div>
                  <Languages className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">MULTILINGUAL SUPPORT</h3>
                  <p className="mt-1 text-muted-foreground">
                    Your Messenger chatbot will be able to communicate in 95
                    languages.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div>
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">CHAT HISTORY</h3>
                  <p className="mt-1 text-muted-foreground">
                    Have conversations automatically emailed to you and saved
                    for future reference.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full bg-muted py-12 md:py-24">
          <div className="container">
            <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                What Do Our Users Think of SmartBotLab?
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Thousands of businesses are using our AI chatbots for Messenger
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <p className="italic">"{testimonial.quote}"</p>
                    <div className="mt-4 flex items-center gap-3">
                      <Avatar>
                        <AvatarImage
                          src={testimonial.image}
                          alt={testimonial.name}
                          data-ai-hint="person face"
                        />
                        <AvatarFallback>
                          {testimonial.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="w-full py-12 md:py-24">
          <div className="container max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="w-full bg-primary py-12 text-primary-foreground md:py-24">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Integrate Our Advanced AI Chatbots Into Your Facebook Business
              Page
            </h2>
            <div className="mt-8">
              <Button asChild size="lg" variant="secondary">
                <Link href="/signup">
                  Sign Up Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-background">
        <div className="container mx-auto px-4 py-12 md:px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
            <div>
              <h4 className="mb-4 font-semibold">Product</h4>
              <nav className="flex flex-col gap-2">
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Home
                </Link>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Training
                </Link>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Reviews
                </Link>
              </nav>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Information</h4>
              <nav className="flex flex-col gap-2">
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  About Us
                </Link>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Terms
                </Link>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Privacy
                </Link>
              </nav>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Resources</h4>
              <nav className="flex flex-col gap-2">
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Affiliate Program
                </Link>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  AI Glossary
                </Link>
              </nav>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Contact</h4>
              <nav className="flex flex-col gap-2">
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Contact Us
                </Link>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Support
                </Link>
                <Link
                  href="/login"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Login
                </Link>
              </nav>
            </div>
            <div className="col-span-2 md:col-span-1">
              <Logo />
              <p className="mt-4 text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} SmartBotLab. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
