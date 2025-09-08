
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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
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
  Minus,
  Star,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';
import { Logo } from '@/components/logo';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ChatWidget } from '@/components/chat-widget';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useState } from 'react';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"


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
    {
    name: 'Jane Doe',
    company: 'Innovate Inc.',
    quote: 'The analytics and insights feature has been a game-changer for understanding our customer engagement. Highly recommended!',
    image: 'https://picsum.photos/100/100?random=4',
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
      price: '৳1900',
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
      price: '৳4900',
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
      price: '৳9900',
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
      price: '৳1500',
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
      price: '৳3900',
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
      price: '৳7900',
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

const IntegrationIcon = ({ children, name }: { children: React.ReactNode, name: string }) => (
  <div className="flex flex-col items-center gap-2 text-center">
    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-muted transition-transform hover:scale-110">
      {children}
    </div>
    <p className="font-medium">{name}</p>
  </div>
);

const chartData = [
  { name: "Jan", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Feb", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Mar", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Apr", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "May", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Jun", total: Math.floor(Math.random() * 5000) + 1000 },
]

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
        
        <section id="analytics-preview" className="w-full py-12 md:py-24 bg-muted">
          <div className="container">
             <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Powerful Analytics at Your Fingertips
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Track your bot's performance, understand user behavior, and make data-driven decisions to improve customer engagement.
              </p>
            </div>
            
            <Card className="overflow-hidden shadow-2xl">
                <div className="flex items-center gap-2 p-4 border-b bg-background/50">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex-1 text-center text-sm font-medium text-muted-foreground">
                        Analytics Overview
                    </div>
                </div>
                <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium">Total Messages</CardTitle>
                                <MessageSquare className="w-5 h-5 text-primary" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold">12,540</div>
                                <p className="text-xs text-muted-foreground">+15.2% from last month</p>
                            </CardContent>
                        </Card>
                         <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                                <Users className="w-5 h-5 text-primary" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold">832</div>
                                <p className="text-xs text-muted-foreground">+5.7% from last month</p>
                            </CardContent>
                        </Card>
                         <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                                <TrendingUp className="w-5 h-5 text-primary" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold">24.5%</div>
                                <p className="text-xs text-muted-foreground">+2.1% from last month</p>
                            </CardContent>
                        </Card>
                         <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium">Feedback</CardTitle>
                                <Star className="w-5 h-5 text-primary" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold">4.8/5</div>
                                <p className="text-xs text-muted-foreground">Based on 253 reviews</p>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="mt-8">
                         <h3 className="text-lg font-semibold mb-4">Monthly Engagement</h3>
                         <div className="h-[250px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={chartData}>
                                    <XAxis
                                        dataKey="name"
                                        stroke="#888888"
                                        fontSize={12}
                                        tickLine={false}
                                        axisLine={false}
                                    />
                                    <YAxis
                                        stroke="#888888"
                                        fontSize={12}
                                        tickLine={false}
                                        axisLine={false}
                                        tickFormatter={(value) => `${value}`}
                                    />
                                    <Bar dataKey="total" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                         </div>
                    </div>
                </CardContent>
            </Card>
          </div>
        </section>

        <section id="comparison" className="w-full py-12 md:py-24">
          <div className="container">
            <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Why SmartBotLab?
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                See how we stack up against the competition.
              </p>
            </div>
            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[250px]">Feature</TableHead>
                    <TableHead className="text-center">SmartBotLab</TableHead>
                    <TableHead className="text-center">Botmaker</TableHead>
                    <TableHead className="text-center">FastBots.ai</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Easy Setup (No Code)</TableCell>
                    <TableCell className="text-center"><Check className="mx-auto h-5 w-5 text-green-500" /></TableCell>
                    <TableCell className="text-center"><Check className="mx-auto h-5 w-5 text-green-500" /></TableCell>
                    <TableCell className="text-center"><Check className="mx-auto h-5 w-5 text-green-500" /></TableCell>
                  </TableRow>
                   <TableRow>
                    <TableCell className="font-medium">Multilingual Support (95+)</TableCell>
                    <TableCell className="text-center"><Check className="mx-auto h-5 w-5 text-green-500" /></TableCell>
                    <TableCell className="text-center"><Minus className="mx-auto h-5 w-5 text-muted-foreground" /></TableCell>
                    <TableCell className="text-center"><Check className="mx-auto h-5 w-5 text-green-500" /></TableCell>
                  </TableRow>
                   <TableRow>
                    <TableCell className="font-medium">YouTube Video Training</TableCell>
                    <TableCell className="text-center"><Check className="mx-auto h-5 w-5 text-green-500" /></TableCell>
                     <TableCell className="text-center"><Minus className="mx-auto h-5 w-5 text-muted-foreground" /></TableCell>
                    <TableCell className="text-center"><Minus className="mx-auto h-5 w-5 text-muted-foreground" /></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">E-commerce Integration</TableCell>
                    <TableCell className="text-center"><Check className="mx-auto h-5 w-5 text-green-500" /></TableCell>
                    <TableCell className="text-center"><Check className="mx-auto h-5 w-5 text-green-500" /></TableCell>
                    <TableCell className="text-center"><Minus className="mx-auto h-5 w-5 text-muted-foreground" /></TableCell>
                  </TableRow>
                   <TableRow>
                    <TableCell className="font-medium">Advanced Analytics</TableCell>
                    <TableCell className="text-center"><Check className="mx-auto h-5 w-5 text-green-500" /></TableCell>
                     <TableCell className="text-center"><Minus className="mx-auto h-5 w-5 text-muted-foreground" /></TableCell>
                    <TableCell className="text-center"><Check className="mx-auto h-5 w-5 text-green-500" /></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
          </div>
        </section>

        <section id="integrations" className="w-full bg-muted py-12 md:py-24 lg:py-32">
          <div className="container">
            <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Integrate With Your Favorite Tools
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Connect SmartBotLab to the tools you already use and love.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-2 place-items-center gap-8 text-muted-foreground sm:grid-cols-4 md:grid-cols-4">
               <IntegrationIcon name="Facebook">
                <svg className="h-12 w-12" role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22.675 0h-21.35C.59 0 0 .59 0 1.325v21.35C0 23.41.59 24 1.325 24H12.82v-9.29H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.92c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h5.698c.734 0 1.325-.59 1.325-1.325V1.325C24 .59 23.41 0 22.675 0z"/></svg>
              </IntegrationIcon>
              <IntegrationIcon name="WhatsApp">
                <svg className="h-12 w-12" role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.01 2.002C6.486 2.002 2 6.487 2 12.012c0 1.742.448 3.475 1.32 5.053L2 22l5.053-1.32c1.578.872 3.31 1.32 5.053 1.32 5.525 0 10.008-4.486 10.008-10.008S17.535 2.003 12.01 2.003zm0 18.012c-1.63 0-3.24-.43-4.64-1.252l-.332-.196-3.443.902.92-3.35-.216-.345a8.04 8.04 0 0 1-1.27-4.77c0-4.426 3.6-8.026 8.027-8.026s8.027 3.6 8.027 8.026-3.602 8.026-8.028 8.026zm4.32-5.183c-.24-.12-.48-.192-.816-.36l-1.32-.625c-.24-.12-.48-.192-.672.193-.193.385-.72.914-.888 1.106-.168.193-.336.217-.624.073-.288-.144-1.2-.433-2.28-1.373-.84-.768-1.416-1.706-1.584-2.017-.168-.313-.012-.48.108-.625.12-.144.24-.24.36-.384.12-.144.168-.24.24-.408.072-.168.036-.312-.012-.433s-.672-1.61-..913-2.17c-.24-.56-.48-.48-.672-.48-.192 0-.408-.024-.624-.024s-.576.085-.864.408c-.288.325-1.104 1.057-1.104 2.57s1.128 2.98 1.272 3.17c.144.192 2.208 3.528 5.472 4.824 3.264 1.296 3.264.864 3.84.816.576-.048 1.776-.72 2.016-1.416.24-.696.24-1.296.168-1.416-.072-.12-.24-.192-.48-.313z"/></svg>
              </IntegrationIcon>
               <IntegrationIcon name="Instagram">
                <svg className="h-12 w-12" role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.936 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.314.936 20.646.523 19.857.218 19.092-.08 18.222-.283 16.947-.34C15.667-.398 15.26-.413 12-.413h0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.06 1.17-.249 1.805-.413 2.227-.217.562-.477.96-.896 1.382-.42.419-.82.679-1.382.896-.421.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.06-1.816-.25-2.236-.413-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.82-896-1.382-.165-.422-.36-1.065-.413-2.235-.055-1.274-.07-1.649-.07-4.859 0-3.211.015-3.586.07-4.859.06-1.17.25-1.816.413-2.236.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.165 1.057-.36 2.227-.413 1.266-.057 1.646-.07 4.85-.07zm0 9.261c-1.923 0-3.486 1.562-3.486 3.485s1.563 3.486 3.486 3.486 3.486-1.563 3.486-3.486c0-1.923-1.563-3.485-3.486-3.485zm0 5.816c-1.285 0-2.321-1.037-2.321-2.321s1.037-2.321 2.321-2.321 2.321 1.037 2.321 2.321c0 1.285-1.036 2.321-2.321 2.321zm6.306-7.857c0 .604-.491 1.096-1.096 1.096s-1.096-.492-1.096-1.096.491-1.096 1.096-1.096 1.096.492 1.096 1.096z"/></svg>
              </IntegrationIcon>
              <IntegrationIcon name="Telegram">
                 <svg className="h-12 w-12" role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm5.666 6.362c.324.138.432.516.294.84l-2.628 6.132-4.14 8.28c-.468.936-1.566 1.164-2.304.552l-2.844-2.328-1.392 1.356c-.192.18-.468.228-.708.108s-.42-.36-.408-.636l.192-2.928,2.784-2.664-4.884-1.5c-.864-.264-1.164-1.2-.552-1.848s1.524-.768 1.836-.672l12.12 3.684c.264.084.528.324.588.6l.012.012.012.024c.036.084.024.18-.012.264l-2.064 4.824-3.12-3.012 5.064-4.836c.156-.156.072-.408-.12-.492z"/></svg>
              </IntegrationIcon>
              <IntegrationIcon name="Slack">
                <svg className="h-12 w-12" role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.522h2.522a2.527 2.527 0 0 1 2.52 2.522v6.313A2.527 2.527 0 0 1 11.356 24a2.528 2.528 0 0 1-2.52-2.522v-6.313zM8.835 5.042a2.528 2.528 0 0 1-2.523 2.52A2.528 2.528 0 0 1 3.792 5.04 2.528 2.528 0 0 1 6.314 2.52h2.52v2.522zm0 1.272a2.528 2.528 0 0 1 2.522 2.52v2.522a2.528 2.528 0 0 1-2.522 2.52H2.52A2.528 2.528 0 0 1 0 11.356a2.528 2.528 0 0 1 2.52-2.52h6.315zM15.165 8.835a2.528 2.528 0 0 1 2.523-2.523A2.528 2.528 0 0 1 20.21 8.834a2.528 2.528 0 0 1-2.522 2.52h-2.522V8.835zm-1.272 0a2.528 2.528 0 0 1-2.52-2.522V2.52A2.528 2.528 0 0 1 12.644 0a2.528 2.528 0 0 1 2.522 2.52v6.315h-2.522zm-2.522 10.125a2.528 2.528 0 0 1-2.523-2.52A2.528 2.528 0 0 1 11.356 14a2.528 2.528 0 0 1 2.52 2.522v2.52h-2.52zm1.27-1.272a2.527 2.527 0 0 1-2.52-2.52h-2.52A2.527 2.527 0 0 1 6.315 10a2.528 2.528 0 0 1 2.52-2.522h6.315A2.528 2.528 0 0 1 17.67 10a2.528 2.528 0 0 1-2.522 2.52v-6.312z"/></svg>
              </IntegrationIcon>
              <IntegrationIcon name="Shopify">
                <svg className="h-12 w-12" role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.433 0H6.52A3.52 3.52 0 0 0 3 3.52v3.125h14.414L15.938 3.32a3.52 3.52 0 0 0-3-1.8H9.375c-.375 0-.719.094-1.032.25a3.52 3.52 0 0 0 9.094-1.77C17.406.03 17.375 0 17.437 0zm1.75 3.52v3.125H21a3.52 3.52 0 0 0-1.813-3.125zm-16.375 0A3.52 3.52 0 0 0 1.03 5.32l1.484 1.32zm-.125 4.375a3.52 3.52 0 0 0 3.52 3.52h.938V7.895h-4.46zM9.375 24h5.25a3.52 3.52 0 0 0 3.52-3.52v-2.844h-5.25v2.844a3.52 3.52 0 0 0-3.52-3.52zm7.656-7.89h3.469v-1.125h-3.47zM9.375 11.415v4.695h1.125v-4.695zm2.344 0v4.695h1.125v-4.695zm2.344 0v4.695h1.125v-4.695z"/></svg>
              </IntegrationIcon>
               <IntegrationIcon name="WordPress">
                 <svg className="h-12 w-12" role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12c0 6.628 5.373 12 12 12c6.627 0 12-5.372 12-12c0-6.627-5.373-12-12-12zm6.22 13.313l-1.464 4.328l-2.825-8.544l2.74-2.828l1.55 7.044zm-5.064 4.884l-2.025-6.04l-2.025 6.04h-1.636l3.66-10.92l3.66 10.92h-1.635zm-5.83-4.86l1.558-7.068l2.733 2.82l-2.824 8.56l-1.468-4.312zm9.11-5.18L13.82 5.54l-1.04-.002l-.587 1.77l.54.52l1.04.001l-1.25 3.65l1.04 3.06l4.88-4.88l-1.177-1.17zm-11.89 0l1.018-2.977l4.81 4.81l1.04-3.054l-1.25-3.65l1.04.001l.54-.52l-.588-1.77l-1.04-.002l-2.616 2.618l-1.177 1.17zm1.18 1.18l-1.77 1.77l-1.748-1.747C2.79 12.067 2.37 10.15 2.37 8.12a9.55 9.55 0 0 1 .53-3.23l2.85 2.85l1.18 1.18z"/></svg>
               </IntegrationIcon>
              <IntegrationIcon name="Zapier">
                <svg className="h-12 w-12" role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22.992 8.448H12.168V0h-3.324v6.156H0v3.888h8.844v3.324H1.32v3.888h7.524v6.744h3.324V17.556h10.824v-3.888h-10.824v-2.316h10.824V8.448z"/></svg>
              </IntegrationIcon>
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
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
             <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-4xl mx-auto"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex flex-col items-start gap-4 p-6">
                           <p className="text-lg font-semibold leading-snug">"{testimonial.quote}"</p>
                          <div className="mt-auto flex items-center gap-3">
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
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
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

        <section className="w-full bg-gradient-to-r from-purple-600 to-blue-500 py-12 text-primary-foreground md:py-24">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
             Start building your SmartBot today!
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/signup">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
               <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/book-demo">
                  Book a Demo
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
