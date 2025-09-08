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

export default function CreateBot() {
  const [pages, setPages] = useState<any[]>([]);
  const [botData, setBotData] = useState({ name: '', page_id: '', status: true });
  const { toast } = useToast();
  const router = useRouter();

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
        body: JSON.stringify(botData),
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
             <Select
              value={botData.page_id}
              onValueChange={(value) => setBotData({ ...botData, page_id: value })}
            >
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
          </div>
          
          <Button type="submit">Launch Bot</Button>
        </form>
      </CardContent>
    </Card>
  );
}
