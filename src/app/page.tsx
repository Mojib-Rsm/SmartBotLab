
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  ArrowRight,
  BarChart2,
  Bot,
  BrainCircuit,
  Check,
  CreditCard,
  Languages,
  Link2,
  MessageSquare,
  Zap,
} from 'lucide-react';
import { Logo } from '@/components/logo';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ChatWidget } from '@/components/chat-widget';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useState } from 'react';

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

const pricingPlans = {
  monthly: [
    {
      name: 'Starter',
      price: '$19',
      priceSuffix: '/mo',
      features: [
        '1 Chatbot',
        '500 Messages/mo',
        'Basic Analytics',
        'Email Support',
      ],
      cta: 'Get Started',
    },
    {
      name: 'Pro',
      price: '$49',
      priceSuffix: '/mo',
      features: [
        '5 Chatbots',
        '2,500 Messages/mo',
        'Advanced Analytics',
        'Priority Email Support',
        'API Access',
      ],
      cta: 'Get Started',
      popular: true,
    },
    {
      name: 'Business',
      price: '$99',
      priceSuffix: '/mo',
      features: [
        'Unlimited Chatbots',
        '10,000 Messages/mo',
        'Full Analytics Suite',
        'Dedicated Phone Support',
        'Custom Integrations',
      ],
      cta: 'Contact Sales',
    },
  ],
  yearly: [
    {
      name: 'Starter',
      price: '$15',
      priceSuffix: '/mo',
      features: [
        '1 Chatbot',
        '500 Messages/mo',
        'Basic Analytics',
        'Email Support',
      ],
      cta: 'Get Started',
    },
    {
      name: 'Pro',
      price: '$39',
      priceSuffix: '/mo',
      features: [
        '5 Chatbots',
        '2,500 Messages/mo',
        'Advanced Analytics',
        'Priority Email Support',
        'API Access',
      ],
      cta: 'Get Started',
      popular: true,
    },
    {
      name: 'Business',
      price: '$79',
      priceSuffix: '/mo',
      features: [
        'Unlimited Chatbots',
        '10,000 Messages/mo',
        'Full Analytics Suite',
        'Dedicated Phone Support',
        'Custom Integrations',
      ],
      cta: 'Contact Sales',
    },
  ],
};


export default function LandingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

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
              href="#pricing"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Pricing
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
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                     <Image src="/images/train-bot.png" alt="Train Bot" width={40} height={40} data-ai-hint="gear brain" />
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
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                     <Image src="/images/link-bot.png" alt="Link Bot" width={40} height={40} data-ai-hint="link chain" />
                  </div>
                  <CardTitle className="mt-4">LINK</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Connect your chatbot to Messenger, WhatsApp, or your website.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Image src="/images/use-bot.png" alt="Use Bot" width={40} height={40} data-ai-hint="chat conversation" />
                  </div>
                  <CardTitle className="mt-4">USE</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Your AI chatbot will reply to messages like a real human, 24/7.
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
                Feature-Packed AI Chatbots
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Everything you need to build a powerful AI assistant for your business.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <BrainCircuit className="h-6 w-6" />
                  </div>
                  <CardTitle>Train with Your Data</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Train with Website, PDF, YouTube.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                   <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Link2 className="h-6 w-6" />
                  </div>
                  <CardTitle>Connect Multiple Platforms</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Connect to Facebook, WhatsApp, Website.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                   <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Zap className="h-6 w-6" />
                  </div>
                  <CardTitle>Real-time Customer Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Provide instant answers and support 24/7.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                   <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <CreditCard className="h-6 w-6" />
                  </div>
                  <CardTitle>E-commerce Ready</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Handle orders, tracking, and upsells effortlessly.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                   <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Languages className="h-6 w-6" />
                  </div>
                  <CardTitle>Multilingual AI Bots</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Engage with your customers in their native language.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <BarChart2 className="h-6 w-6" />
                  </div>
                  <CardTitle>Analytics & Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Gain valuable insights from customer interactions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full bg-muted py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Pricing Plans
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Choose the plan that's right for you.
              </p>
              <div className="flex items-center space-x-2">
                <Label htmlFor="billing-cycle">Monthly</Label>
                <Switch
                  id="billing-cycle"
                  checked={billingCycle === 'yearly'}
                  onCheckedChange={(checked) =>
                    setBillingCycle(checked ? 'yearly' : 'monthly')
                  }
                />
                <Label htmlFor="billing-cycle">Yearly (Save 20%)</Label>
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {pricingPlans[billingCycle].map((plan, index) => (
                <Card
                  key={index}
                  className={plan.popular ? 'border-primary shadow-lg' : ''}
                >
                  <CardHeader>
                    {plan.popular && (
                      <div className="relative text-right">
                        <div className="absolute -top-4 right-4 inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                          POPULAR
                        </div>
                      </div>
                    )}
                    <CardTitle>{plan.name}</CardTitle>
                    <CardDescription>
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">
                        {plan.priceSuffix}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="/signup">{plan.cta}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24">
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

        <section id="faq" className="w-full bg-muted py-12 md:py-24">
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
      <ChatWidget />
    </div>
  );
}
