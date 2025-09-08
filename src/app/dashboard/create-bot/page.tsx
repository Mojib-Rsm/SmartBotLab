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
import { FacebookIcon, Search } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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

const botTemplates = [
    { title: "E-commerce FAQ", description: "Answer common questions about products, shipping, and returns.", category: "E-commerce" },
    { title: "Order Status Bot", description: "Provide real-time order tracking and updates to customers.", category: "E-commerce" },
    { title: "Student Admissions Helper", description: "Guide prospective students through the admissions process.", category: "Education" },
    { title: "Course Enrollment Bot", description: "Help students find and enroll in courses.", category: "Education" },
    { title: "Patient Appointment Scheduler", description: "Allow patients to book and manage appointments.", category: "Healthcare" },
    { title: "Symptom Checker", description: "Provide initial guidance on medical symptoms.", category: "Healthcare" },
    { title: "Hotel Booking Assistant", description: "Assist users with finding and booking hotel rooms.", category: "Travel" },
    { title: "Flight Status Bot", description: "Provide real-time flight information and updates.", category: "Travel" },
    { title: "Lead Generation Bot", description: "Capture and qualify leads from your website visitors.", category: "Sales" },
    { title: "Customer Support Bot", description: "Provide 24/7 support and escalate issues when necessary.", category: "Support" },
];


export default function CreateBot() {
  const [pages, setPages] = useState<FacebookPage[]>([]);
  const [botData, setBotData] = useState({ name: '', page_id: '', purpose: 'FAQ', user_id: 1, status: true }); // Assuming user_id 1 for now
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('All');
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
  
  const filteredTemplates = botTemplates.filter(template => {
    const matchesCategory = activeTab === 'All' || template.category === activeTab;
    const matchesSearch = template.title.toLowerCase().includes(searchTerm.toLowerCase()) || template.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = ['All', ...new Set(botTemplates.map(t => t.category))];

  return (
    <div className="space-y-8">
        <Card className="w-full">
        <CardHeader>
            <CardTitle>Create a New Bot</CardTitle>
            <CardDescription>Fill out the form to launch your new AI assistant from scratch.</CardDescription>
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

        <div>
            <h2 className="text-2xl font-bold text-center mb-2">Bot Purpose Library</h2>
            <p className="text-muted-foreground text-center mb-8">Or get started with one of our 100+ pre-built templates.</p>

            <div className="mb-6">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input 
                        placeholder="Search for a use case..." 
                        className="pl-10"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="flex flex-wrap h-auto">
                   {categories.map(category => (
                        <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
                   ))}
                </TabsList>

                <div className="mt-6 max-h-[600px] overflow-y-auto pr-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredTemplates.map((template, index) => (
                        <Card key={index}>
                            <CardHeader>
                            <CardTitle>{template.title}</CardTitle>
                            <CardDescription>{template.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                            <Button className="w-full" onClick={() => {
                                setBotData(prev => ({...prev, name: template.title, purpose: template.category}));
                                toast({ title: "Template Selected", description: `${template.title} has been loaded into the form.`});
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}>
                                Create Bot
                            </Button>
                            </CardContent>
                        </Card>
                        ))}
                    </div>
                </div>
            </Tabs>
        </div>
    </div>
  );
}
