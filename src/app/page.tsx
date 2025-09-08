
import Link from 'next/link';
import {
  Button
} from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
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
  Check,
  MessageSquare,
  Plus,
  Zap,
  BrainCircuit,
  Languages,
  Mail,
  Send,
  ShoppingCart,
  FormInput,
  CalendarDays
} from 'lucide-react';
import {
  Logo
} from '@/components/logo';
import Image from 'next/image';
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from '@/components/ui/avatar';

const testimonials = [{
  name: 'Lidor Perez',
  company: 'Pisga, Israel',
  quote: 'Loved building our non-profit educational bot for maker teachers here! Helps plan lessons, materials & assessment. This platform is great for creating valuable resources that enrich teaching!',
  image: 'https://picsum.photos/100/100?random=1'
}, {
  name: 'Kaori',
  company: 'Founder, Jhunnu Handicraft',
  quote: 'FastBot.ai is amazing! It was so easy to set up—no coding needed. Anyone can use it, even a child. The chatbot works smoothly and answers questions instantly, making my website more helpful, get quick and clear responses.',
  image: 'https://picsum.photos/100/100?random=2'

}, {
  name: 'Mark Gregory',
  company: 'Founder, The Customer\'s Shoes Ltd',
  quote: 'If Steve Jobs had designed a bot app, it would have been this one. Simply awesome!!',
  image: 'https://picsum.photos/100/100?random=3'
}];


const faqItems = [{
    question: "How do Messenger chatbots work?",
    answer: "Our chatbots use AI to understand user messages within Facebook Messenger. They access the knowledge base you provide to formulate relevant, human-like responses and send them instantly."
  },
  {
    question: "Is it easy to set up a Messenger chatbot with SmartBotLab?",
    answer: "Yes! Our 3-step process (Train, Link, Use) makes it incredibly simple. You can have a custom chatbot running in under 2 minutes without writing a single line of code."
  },
  {
    question: "Can the chatbots also respond to comments?",
    answer: "Yes, you can configure your chatbot to automatically reply to comments on your Facebook posts, helping you engage with more users and capture leads."
  },
  {
    question: "Can my Messenger chatbots handle multiple languages?",
    answer: "Absolutely. Our chatbots support 95 languages, allowing you to communicate with your customers in their native language and provide a more personalized experience."
  },
];

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
          <Logo />
          <nav className="hidden items-center gap-6 text-sm md:flex">
             <Link href="#features" className="text-muted-foreground transition-colors hover:text-foreground">Features</Link>
             <Link href="#how-it-works" className="text-muted-foreground transition-colors hover:text-foreground">How it Works</Link>
             <Link href="#testimonials" className="text-muted-foreground transition-colors hover:text-foreground">Testimonials</Link>
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
          <div className="container px-4 md:px-6 text-center">
            <div className="flex flex-col items-center space-y-4">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-primary font-medium">
                Facebook Messenger AI Chatbot
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Build a Custom AI Chatbot for Messenger in Under 2 Minutes
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Start offering 24/7/365 support via Facebook Messenger with our simple integration.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-2 min-[400px]:flex-row justify-center">
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

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">3 Simple Steps to Using Our Messenger AI ChatBots</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Offer instant, reliable responses via your Facebook Page using AI.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-2xl">01</div>
                  <CardTitle className="mt-4">TRAIN</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Add any Website content, DOCX, TXT, PDF files, or even YouTube videos to your chatbot's knowledge.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-2xl">02</div>
                  <CardTitle className="mt-4">LINK</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Link your newly created custom chatbot to your business Facebook Page.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-2xl">03</div>
                  <CardTitle className="mt-4">USE</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Let your AI chatbot respond to incoming messages or reply to comments like a real human, 24/7/365.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24">
          <div className="container">
             <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Messenger Customer Support Chatbots</h2>
            </div>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex gap-4">
                  <div><BrainCircuit className="h-8 w-8 text-primary" /></div>
                  <div>
                      <h3 className="text-lg font-bold">CUSTOM KNOWLEDGE</h3>
                      <p className="text-muted-foreground mt-1">Add information about your business so the chatbot can respond with accurate answers.</p>
                  </div>
              </div>
               <div className="flex gap-4">
                  <div><Zap className="h-8 w-8 text-primary" /></div>
                  <div>
                      <h3 className="text-lg font-bold">24/7/365 AVAILABILITY</h3>
                      <p className="text-muted-foreground mt-1">Offer support via Messenger around the clock to gain more sales and positive reviews.</p>
                  </div>
              </div>
               <div className="flex gap-4">
                  <div><MessageSquare className="h-8 w-8 text-primary" /></div>
                  <div>
                      <h3 className="text-lg font-bold">REPLY TO COMMENTS</h3>
                      <p className="text-muted-foreground mt-1">Your chatbot can also be set to respond to any comments your posts receive too.</p>
                  </div>
              </div>
                <div className="flex gap-4">
                  <div><Bot className="h-8 w-8 text-primary" /></div>
                  <div>
                      <h3 className="text-lg font-bold">MULTIPLE CONVERSATIONS</h3>
                      <p className="text-muted-foreground mt-1">Your chatbot can deal with multiple concurrent conversations, replacing the need for multiple agents.</p>
                  </div>
              </div>
               <div className="flex gap-4">
                  <div><Languages className="h-8 w-8 text-primary" /></div>
                  <div>
                      <h3 className="text-lg font-bold">MULTILINGUAL SUPPORT</h3>
                      <p className="text-muted-foreground mt-1">Your Messenger chatbot will be able to communicate in 95 languages.</p>
                  </div>
              </div>
                 <div className="flex gap-4">
                  <div><Mail className="h-8 w-8 text-primary" /></div>
                  <div>
                      <h3 className="text-lg font-bold">CHAT HISTORY</h3>
                      <p className="text-muted-foreground mt-1">Have conversations automatically emailed to you and saved for future reference.</p>
                  </div>
              </div>
            </div>
          </div>
        </section>

        <section id="ai-agents" className="w-full py-12 md:py-24 bg-muted">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Do More in Messenger Conversations</h2>
              <p className="text-muted-foreground md:text-lg">
                Enhance your chatbot's capabilities by connecting it to Zapier AI Actions. Transform your chatbot into a powerful AI agent that can seamlessly perform tasks such as:
              </p>
              <ul className="grid gap-4 mt-4">
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-2">
                    <FormInput className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Submitting forms</h4>
                    <p className="text-muted-foreground text-sm">Collect lead data or user feedback directly in chat.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                   <div className="bg-primary/10 rounded-full p-2">
                    <CalendarDays className="h-5 w-5 text-primary" />
                  </div>
                   <div>
                    <h4 className="font-semibold">Booking appointments</h4>
                    <p className="text-muted-foreground text-sm">Integrate with calendars to schedule meetings effortlessly.</p>
                  </div>
                </li>
                 <li className="flex items-start gap-3">
                   <div className="bg-primary/10 rounded-full p-2">
                    <Send className="h-5 w-5 text-primary" />
                  </div>
                   <div>
                    <h4 className="font-semibold">Sending emails and SMS messages</h4>
                    <p className="text-muted-foreground text-sm">Send notifications or follow-ups automatically.</p>
                  </div>
                </li>
                 <li className="flex items-start gap-3">
                   <div className="bg-primary/10 rounded-full p-2">
                    <ShoppingCart className="h-5 w-5 text-primary" />
                  </div>
                   <div>
                    <h4 className="font-semibold">Checking orders</h4>
                    <p className="text-muted-foreground text-sm">Provide real-time order status updates to customers.</p>
                  </div>
                </li>
              </ul>
               <p className="text-sm text-muted-foreground">All tasks are handled automatically through natural, conversational interactions with your chatbot users, ensuring a smooth and efficient experience through Messenger.</p>
                <div className="flex gap-4 pt-4">
                     <Button asChild size="lg">
                        <Link href="/signup">
                        Sign Up Free
                        <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                        <Link href="#">
                        Learn about AI Agents
                        </Link>
                    </Button>
                </div>
            </div>
             <div>
              <Image src="https://picsum.photos/600/500" alt="AI Agents" width={600} height={500} className="rounded-lg shadow-xl" data-ai-hint="abstract illustration" />
            </div>
          </div>
        </section>
        
        <section id="testimonials" className="w-full py-12 md:py-24">
            <div className="container">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">What Do Our Users Think of SmartBotLab?</h2>
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
                                        <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint="person face" />
                                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold">{testimonial.name}</p>
                                        <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>


        <section id="faq" className="w-full py-12 md:py-24 bg-muted">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-8 font-headline">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.slice(0, Math.ceil(faqItems.length / 2)).map((item, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
               <Accordion type="single" collapsible className="w-full">
                {faqItems.slice(Math.ceil(faqItems.length / 2)).map((item, index) => (
                  <AccordionItem value={`item-${index + Math.ceil(faqItems.length / 2)}`} key={index}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
        
        <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
            <div className="container text-center">
                 <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Integrate Our Advanced AI Chatbots Into Your Facebook Business Page</h2>
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

       <footer className="border-t bg-card">
         <div className="container mx-auto py-12 px-4 md:px-6">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
              <div>
                  <h4 className="font-semibold mb-4">Product</h4>
                  <nav className="flex flex-col gap-2">
                      <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Home</Link>
                      <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Training</Link>
                      <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Reviews</Link>
                  </nav>
              </div>
               <div>
                  <h4 className="font-semibold mb-4">Information</h4>
                  <nav className="flex flex-col gap-2">
                      <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">About Us</Link>
                      <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms</Link>
                      <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy</Link>
                  </nav>
              </div>
              <div>
                  <h4 className="font-semibold mb-4">Resources</h4>
                   <nav className="flex flex-col gap-2">
                      <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Affiliate Program</Link>
                      <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">AI Glossary</Link>
                   </nav>
              </div>
              <div>
                  <h4 className="font-semibold mb-4">Contact</h4>
                   <nav className="flex flex-col gap-2">
                      <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Contact Us</Link>
                      <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Support</Link>
                      <Link href="/login" className="text-sm text-muted-foreground hover:text-foreground">Login</Link>
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
