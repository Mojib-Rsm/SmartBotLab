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
    // E-commerce
    { title: "E-commerce FAQ Bot", description: "Answer common questions about products, shipping, and returns.", category: "E-commerce" },
    { title: "Order Status Bot", description: "Provide real-time order tracking and updates to customers.", category: "E-commerce" },
    { title: "Product Recommendation Bot", description: "Suggest products to users based on their preferences and browsing history.", category: "E-commerce" },
    { title: "Abandoned Cart Recovery Bot", description: "Remind customers about items left in their cart and encourage them to complete the purchase.", category: "E-commerce" },
    { title: "Inventory Management Bot", description: "Get real-time updates on stock levels and manage inventory.", category: "E-commerce" },
    { title: "Discount & Promotion Bot", description: "Inform customers about the latest deals, discounts, and promotional offers.", category: "E-commerce" },
    { title: "Return & Exchange Assistant", description: "Automate the return and exchange process for a smoother customer experience.", category: "E-commerce" },

    // Education
    { title: "Student Admissions Helper", description: "Guide prospective students through the admissions process and answer their queries.", category: "Education" },
    { title: "Course Enrollment Bot", description: "Help students find and enroll in courses, providing details about prerequisites and schedules.", category: "Education" },
    { title: "Campus Information Bot", description: "Provide information about campus facilities, events, and important dates.", category: "Education" },
    { title: "Library Assistant Bot", description: "Help students search for books, check availability, and manage their library account.", category: "Education" },
    { title: "Student-Tutor Matching Bot", description: "Connect students with suitable tutors based on subject and availability.", category: "Education" },
    { title: "Alumni Network Bot", description: "Engage with alumni, share news, and facilitate networking opportunities.", category: "Education" },
    { title: "Course Feedback Bot", description: "Collect feedback from students about courses and instructors.", category: "Education" },

    // Healthcare
    { title: "Patient Appointment Scheduler", description: "Allow patients to book, reschedule, or cancel appointments with doctors.", category: "Healthcare" },
    { title: "Symptom Checker Bot", description: "Provide initial guidance on medical symptoms and suggest next steps.", category: "Healthcare" },
    { title: "Medication Reminder Bot", description: "Send reminders to patients to take their medications on time.", category: "Healthcare" },
    { title: "Health Information Bot", description: "Provide reliable information on various health topics, conditions, and treatments.", category: "Healthcare" },
    { title: "Clinic/Hospital Locator", description: "Help users find the nearest clinic, hospital, or pharmacy.", category: "Healthcare" },
    { title: "Post-Appointment Follow-up", description: "Check in with patients after their appointments to ensure they are following care instructions.", category: "Healthcare" },
    { title: "Mental Health Support Bot", description: "Offer initial mental health support and resources.", category: "Healthcare" },

    // Travel & Hospitality
    { title: "Hotel Booking Assistant", description: "Assist users with finding and booking hotel rooms based on their preferences.", category: "Travel & Hospitality" },
    { title: "Flight Status Bot", description: "Provide real-time flight information, delays, and gate changes.", category: "Travel & Hospitality" },
    { title: "Restaurant Reservation Bot", description: "Allow users to book a table at a restaurant.", category: "Travel & Hospitality" },
    { title: "Local Tour Guide Bot", description: "Recommend local attractions, restaurants, and events to tourists.", category: "Travel & Hospitality" },
    { title: "Travel Itinerary Planner", description: "Help users plan their travel itinerary with suggestions for activities and transport.", category: "Travel & Hospitality" },
    { title: "Car Rental Bot", description: "Assist users in finding and booking rental cars.", category: "Travel & Hospitality" },
    { title: "Room Service Bot", description: "Allow hotel guests to order room service directly through the chatbot.", category: "Travel & Hospitality" },

    // Real Estate
    { title: "Property Search Bot", description: "Help users find properties for sale or rent based on their criteria.", category: "Real Estate" },
    { title: "Lead Qualification Bot", description: "Qualify potential buyers or renters by asking a series of questions.", category: "Real Estate" },
    { title: "Appointment Scheduling Bot", description: "Schedule property viewings between agents and potential clients.", category: "Real Estate" },
    { title: "Mortgage Calculator Bot", description: "Provide users with an estimate of their monthly mortgage payments.", category: "Real Estate" },
    { title: "Real Estate FAQ Bot", description: "Answer common questions about the buying, selling, or renting process.", category: "Real Estate" },

    // Finance & Insurance
    { title: "Loan Application Assistant", description: "Guide users through the initial stages of a loan application.", category: "Finance & Insurance" },
    { title: "Insurance Quote Bot", description: "Provide users with a quick quote for various types of insurance.", category: "Finance & Insurance" },
    { title: "Financial Advisor Bot", description: "Offer basic financial advice and tips on saving and investing.", category: "Finance & Insurance" },
    { title: "Claim Status Bot", description: "Allow customers to check the status of their insurance claims.", category: "Finance & Insurance" },
    { title: "Stock Information Bot", description: "Provide real-time stock prices and market information.", category: "Finance & Insurance" },

    // Food & Restaurant
    { title: "Food Ordering Bot", description: "Allow customers to place food orders for delivery or pickup.", category: "Food & Restaurant" },
    { title: "Menu Inquiry Bot", description: "Provide information about the menu, including ingredients and prices.", category: "Food & Restaurant" },
    { title: "Customer Feedback Bot", description: "Collect feedback from customers about their dining experience.", category: "Food & Restaurant" },
    
    // Marketing & Sales
    { title: "Lead Generation Bot", description: "Capture and qualify leads from your website visitors 24/7.", category: "Marketing & Sales" },
    { title: "Promotional Contest Bot", description: "Run contests and giveaways to engage your audience and generate leads.", category: "Marketing & Sales" },
    { title: "Product Demo Bot", description: "Schedule and provide automated product demonstrations.", category: "Marketing & Sales" },
    { title: "Content Subscription Bot", description: "Allow users to subscribe to your newsletter or blog updates.", category: "Marketing & Sales" },

    // Customer Support
    { title: "General FAQ Bot", description: "A versatile bot to answer frequently asked questions on any topic.", category: "Customer Support" },
    { title: "24/7 Customer Support Bot", description: "Provide round-the-clock support and escalate complex issues to human agents.", category: "Customer Support" },
    { title: "Technical Support Bot", description: "Help users troubleshoot common technical issues with your product or service.", category: "Customer Support" },
    { title: "Billing Inquiry Bot", description: "Assist customers with questions about their bills and payments.", category: "Customer Support" },

    // Human Resources
    { title: "HR Policy FAQ Bot", description: "Answer employee questions about company policies and procedures.", category: "Human Resources" },
    { title: "Job Application Bot", description: "Allow candidates to apply for open positions and answer initial screening questions.", category: "Human Resources" },
    { title: "Employee Onboarding Bot", description: "Guide new hires through the onboarding process.", category: "Human Resources" },
    { title: "Leave Request Bot", description: "Automate the process of requesting and tracking employee leave.", category: "Human Resources" },

    // Entertainment & Media
    { title: "Movie/Show Recommendation Bot", description: "Recommend movies or TV shows based on user preferences.", category: "Entertainment & Media" },
    { title: "Event Ticketing Bot", description: "Help users find and purchase tickets for events.", category: "Entertainment & Media" },
    { title: "News Update Bot", description: "Provide users with the latest news on topics they are interested in.", category: "Entertainment & Media" },

    // Miscellaneous
    { title: "Local Business Bot", description: "Provide information about a local business, including hours, location, and services.", category: "Miscellaneous" },
    { title: "Non-Profit Donation Bot", description: "Facilitate donations and provide information about a non-profit's mission.", category: "Miscellaneous" },
    { title: "Personal Fitness Coach Bot", description: "Provide workout routines and diet tips.", category: "Miscellaneous" },
    { title: "Recipe Suggestion Bot", description: "Suggest recipes based on ingredients the user has.", category: "Miscellaneous" },
    { title: "Weather Forecast Bot", description: "Provide real-time weather forecasts for any location.", category: "Miscellaneous" }
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

  const categories = ['All', ...Array.from(new Set(botTemplates.map(t => t.category)))];

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
                <TabsList className="flex flex-wrap h-auto justify-start">
                   {categories.map(category => (
                        <TabsTrigger key={category} value={category} className="h-auto py-1.5 px-3 m-1">{category}</TabsTrigger>
                   ))}
                </TabsList>

                <div className="mt-6 max-h-[600px] overflow-y-auto pr-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredTemplates.length > 0 ? filteredTemplates.map((template, index) => (
                        <Card key={index}>
                            <CardHeader>
                            <CardTitle className="text-lg">{template.title}</CardTitle>
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
                        )) : (
                          <p className="col-span-full text-center text-muted-foreground">No templates found for your search.</p>
                        )}
                    </div>
                </div>
            </Tabs>
        </div>
    </div>
  );
}
