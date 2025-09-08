'use client';
import { useEffect, useState } from 'react';
import { getBots } from '@/lib/data';
import type { Bot } from '@/lib/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Bot as BotIcon, MessageCircle, BarChartHorizontal, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Image from 'next/image';


const StatCard = ({ title, value, icon }: { title: string, value: string, icon: React.ReactNode }) => (
    <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{title}</CardTitle>
            {icon}
        </CardHeader>
        <CardContent>
            <div className="text-2xl font-bold">{value}</div>
        </CardContent>
    </Card>
);


export default function Dashboard() {
  const [bots, setBots] = useState<Bot[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      setShowWelcome(true);
      localStorage.setItem('hasVisited', 'true');
    }
    
    async function loadBots() {
      try {
        setLoading(true);
        const fetchedBots = await getBots();
        setBots(fetchedBots);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch bots');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadBots();
  }, []);

  const totalMessages = bots.reduce((sum, bot) => sum + bot.messagesSent, 0);
  const totalInteractions = bots.reduce((sum, bot) => sum + bot.usersInteracted, 0);


  return (
    <div className="flex min-h-screen w-full flex-col">
       <main className="grid flex-1 items-start gap-4 p-4 sm:p-6 md:gap-8">
        <div className="flex flex-col gap-2 md:flex-row md:items-center">
          <div className="flex-1">
            <h1 className="text-3xl font-bold">My Bots</h1>
            <p className="mt-1 bg-gradient-to-r from-primary to-accent bg-clip-text text-lg font-semibold text-transparent">
              Here's an overview of your AI assistants.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
             <Button asChild>
              <Link href="/dashboard/create-bot">
                <Plus className="mr-2 h-4 w-4" /> Create Bot
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <StatCard title="Total Bots" value={String(bots.length)} icon={<BotIcon className="h-4 w-4 text-muted-foreground" />} />
            <StatCard title="Messages Sent" value={totalMessages.toLocaleString()} icon={<MessageCircle className="h-4 w-4 text-muted-foreground" />} />
            <StatCard title="Users Interacted" value={totalInteractions.toLocaleString()} icon={<BarChartHorizontal className="h-4 w-4 text-muted-foreground" />} />
        </div>

        <div>
            {loading && <p>Loading bots...</p>}
            {error && <p className="text-destructive">Error: {error}</p>}
            
            {!loading && !error && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {bots.map((bot) => (
                    <Card key={bot.id} className="shadow-md hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                        {bot.name}
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${bot.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{bot.status}</span>
                        </CardTitle>
                        <CardDescription>Page: {bot.page.name}</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-2 text-sm">
                        <p><strong>Purpose:</strong> {bot.purpose}</p>
                        <p><strong>Language:</strong> {bot.language === 'bn' ? 'Bengali' : 'English'}</p>
                        <div className="flex justify-between text-muted-foreground pt-2 border-t mt-2">
                            <span>{bot.messagesSent.toLocaleString()} msgs</span>
                            <span>{bot.usersInteracted.toLocaleString()} users</span>
                        </div>
                    </CardContent>
                    </Card>
                ))}
                </div>
            )}
        </div>
      </main>

       <Dialog open={showWelcome} onOpenChange={setShowWelcome}>
        <DialogContent className="sm:max-w-md p-0 overflow-hidden">
          <div className="relative h-48 w-full">
            <Image src="https://picsum.photos/600/200?random=10" layout="fill" objectFit="cover" alt="Welcome banner" data-ai-hint="abstract purple" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-center justify-center">
                 <h2 className="text-3xl font-bold text-primary-foreground flex items-center gap-2">
                   <Sparkles className="h-8 w-8" />
                   SmartBotLab + AI
                 </h2>
            </div>
          </div>
          <DialogHeader className="p-6 text-center">
            <DialogTitle className="text-2xl">Welcome to SmartBotLab</DialogTitle>
            <DialogDescription>
              Your smarter way to automate with AI. Let's show you how to work faster and achieve more!
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex-row items-center justify-center gap-2 pb-6 px-6">
            <Button type="button" variant="outline" onClick={() => setShowWelcome(false)} className="flex-1">
              Skip the tour
            </Button>
            <Button type="button" onClick={() => setShowWelcome(false)} className="flex-1">
              Start Exploring
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

    </div>
  );
}