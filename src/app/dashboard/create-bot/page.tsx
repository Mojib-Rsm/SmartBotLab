'use client';
import { useEffect, useState } from 'react';
import { getPages } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import type { FacebookPage } from '@/lib/types';
import { FacebookIcon } from 'lucide-react';

const FacebookPageSelector = ({ pages, selectedPage, onSelectPage }: { pages: FacebookPage[], selectedPage: string, onSelectPage: (pageId: string) => void }) => (
  <Select value={selectedPage} onValueChange={onSelectPage}>
    <SelectTrigger id="page-select">
      <SelectValue placeholder="Select a page" />
    </SelectTrigger>
    <SelectContent>
      {pages.map((page) => (
        <SelectItem key={page.id} value={String(page.id)}>
          {page.name}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
);


export default function CreateBot() {
  const [pages, setPages] = useState<FacebookPage[]>([]);
  const [botData, setBotData] = useState({ name: '', page_id: '', purpose: 'FAQ', user_id: 1, status: true }); // Assuming user_id 1 for now
  const { toast } = useToast();
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    async function fetchPages() {
      try {
        const data = await getPages();
        setPages(data);
      } catch (error) {
        console.error("Failed to fetch pages:", error);
        toast({
          title: "Error",
          description: "Could not fetch pages from the database.",
          variant: "destructive",
        })
      }
    }
    fetchPages();
  }, [toast]);

  const handleLinkFacebook = () => {
    // This would typically involve a more complex OAuth flow to get page access tokens.
    // For now, we'll just use the sign-in to establish the link conceptually.
    signIn('facebook', { callbackUrl: '/dashboard/create-bot?linked=true' });
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!botData.name || !botData.page_id) {
      toast({
        title: "Missing Information",
        description: "Please provide a name and select a page for the bot.",
        variant: "destructive",
      });
      return;
    }
    try {
      const response = await fetch('/api/bots', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            ...botData,
            page_id: parseInt(botData.page_id, 10)
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create bot');
      }

      toast({
        title: "Success!",
        description: "Bot created successfully.",
      });
      router.push('/dashboard');
    } catch (error) {
       console.error("Failed to create bot:", error);
        toast({
          title: "Error",
          description: "Could not create the bot.",
          variant: "destructive",
        })
    }
  };

  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>Create a New Bot</CardTitle>
        <CardDescription>Fill out the form to launch your new AI assistant.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid gap-6">
           <div className="grid gap-2">
            <Label htmlFor="bot-name">Bot Name</Label>
            <Input
              id="bot-name"
              type="text"
              placeholder="e.g., Support Bot"
              value={botData.name}
              onChange={(e) => setBotData({ ...botData, name: e.target.value })}
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="page-select">Facebook Page</Label>
            <div className="flex items-center gap-2">
              {pages.length > 0 ? (
                  <FacebookPageSelector
                      pages={pages}
                      selectedPage={botData.page_id}
                      onSelectPage={(pageId) => setBotData({ ...botData, page_id: pageId })}
                  />
              ) : (
                  <p className="text-sm text-muted-foreground">No pages found. Link your account.</p>
              )}
              <Button type="button" variant="outline" onClick={handleLinkFacebook}>
                  <FacebookIcon className="mr-2 h-4 w-4" /> Link Page
              </Button>
            </div>
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="purpose-select">Bot Purpose</Label>
            <Select
              value={botData.purpose}
              onValueChange={(value) => setBotData({ ...botData, purpose: value })}
            >
              <SelectTrigger id="purpose-select">
                <SelectValue placeholder="Select a purpose" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="FAQ">FAQ</SelectItem>
                <SelectItem value="Customer Support">Customer Support</SelectItem>
                <SelectItem value="Product Info">Product Info</SelectItem>
                <SelectItem value="Hotel">Hotel</SelectItem>
                <SelectItem value="E-commerce">E-commerce</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button type="submit">Launch Bot</Button>
        </form>
      </CardContent>
    </Card>
  );
}
