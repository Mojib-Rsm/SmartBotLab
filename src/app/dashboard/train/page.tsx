'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { Upload, Link as LinkIcon, Youtube } from 'lucide-react';

export default function TrainBotPage() {
  const { toast } = useToast();
  const [url, setUrl] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleUrlSubmit = async (e: React.FormEvent, type: 'website' | 'youtube') => {
    e.preventDefault();
    if (!url) {
      toast({
        title: 'URL is required',
        description: `Please enter a ${type} URL to train the bot.`,
        variant: 'destructive',
      });
      return;
    }
    setIsLoading(true);

    try {
      const response = await fetch('/api/train', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, source: url }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to train from URL.');
      }

      toast({
        title: 'Training Started!',
        description: `The bot has started learning from the ${type} URL.`,
      });
      setUrl('');
    } catch (error: any) {
      toast({
        title: 'Training Failed',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleFileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      toast({
        title: 'File is required',
        description: 'Please select a file to upload.',
        variant: 'destructive',
      });
      return;
    }
    setIsLoading(true);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('type', 'file');

    try {
        const response = await fetch('/api/train', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to train from file.');
        }

        toast({
            title: 'Training Started!',
            description: `The bot has started learning from the file: ${file.name}.`,
        });
        setFile(null);
        // Reset file input
        const fileInput = document.getElementById('file-upload') as HTMLInputElement;
        if(fileInput) fileInput.value = '';

    } catch (error: any) {
        toast({
            title: 'Training Failed',
            description: error.message,
            variant: 'destructive',
        });
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Train Your Bot</CardTitle>
          <CardDescription>
            Add content to your bot's knowledge base. It can learn from
            websites, documents, or even YouTube videos.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="website" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="website"><LinkIcon className="mr-2 h-4 w-4" />Website</TabsTrigger>
              <TabsTrigger value="file"><Upload className="mr-2 h-4 w-4" />File</TabsTrigger>
              <TabsTrigger value="youtube"><Youtube className="mr-2 h-4 w-4" />YouTube</TabsTrigger>
            </TabsList>
            <TabsContent value="website">
              <form onSubmit={(e) => handleUrlSubmit(e, 'website')} className="grid gap-4 pt-4">
                <Label htmlFor="website-url">Website URL</Label>
                <Input
                  id="website-url"
                  placeholder="https://your-business.com/about"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
                <Button type="submit" disabled={isLoading} className="w-fit">
                  {isLoading ? 'Training...' : 'Add to Knowledge Base'}
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="file">
              <form onSubmit={handleFileSubmit} className="grid gap-4 pt-4">
                <Label htmlFor="file-upload">Upload a document</Label>
                 <Input id="file-upload" type="file" onChange={handleFileChange} accept=".docx,.pdf,.txt"/>
                <p className="text-sm text-muted-foreground">Supported formats: DOCX, PDF, TXT.</p>
                <Button type="submit" disabled={isLoading || !file}>
                  {isLoading ? 'Training...' : 'Add to Knowledge Base'}
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="youtube">
              <form onSubmit={(e) => handleUrlSubmit(e, 'youtube')} className="grid gap-4 pt-4">
                <Label htmlFor="youtube-url">YouTube URL</Label>
                <Input
                  id="youtube-url"
                  placeholder="https://www.youtube.com/watch?v=..."
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
                <Button type="submit" disabled={isLoading} className="w-fit">
                  {isLoading ? 'Training...' : 'Add to Knowledge Base'}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
