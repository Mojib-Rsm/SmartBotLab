'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  Hotel,
  Languages,
  Loader2,
  MessageSquareQuestion,
  ShoppingBag,
  Sparkles,
  Trash2,
  Wrench,
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { mockPages } from '@/lib/data';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const templates = [
  {
    name: 'FAQ',
    description: 'Answer common questions automatically.',
    icon: <MessageSquareQuestion className="h-8 w-8" />,
  },
  {
    name: 'Customer Support',
    description: 'Provide basic support and escalate issues.',
    icon: <Wrench className="h-8 w-8" />,
  },
  {
    name: 'E-commerce',
    description: 'Showcase products and assist with sales.',
    icon: <ShoppingBag className="h-8 w-8" />,
  },
  {
    name: 'Hotel',
    description: 'Handle bookings and room inquiries.',
    icon: <Hotel className="h-8 w-8" />,
  },
  {
    name: 'Start from Scratch',
    description: 'A blank canvas for your custom bot.',
    icon: <Bot className="h-8 w-8" />,
  },
];

type BotData = {
  template: string;
  page: string;
  language: 'en' | 'bn';
  context: string;
  responses: string[];
};

export default function CreateBotPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [botData, setBotData] = useState<BotData>({
    template: '',
    page: '',
    language: 'en',
    context: '',
    responses: [],
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const totalSteps = 4;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleGenerateResponses = async () => {
    setIsGenerating(true);
    // This would call the AI flow in a real app
    // e.g. const result = await generateInitialBotResponses(...)
    setTimeout(() => {
      const newResponses = [
        `Welcome to ${
          mockPages.find(p => p.id === botData.page)?.name || 'our page'
        }! How can I help you today?`,
        'We are open from 9 AM to 5 PM, Monday to Friday.',
        'You can find our address on our Facebook page.',
        'Is there anything else I can assist you with?',
      ];
      setBotData({ ...botData, responses: newResponses });
      setIsGenerating(false);
      toast({
        title: 'Responses Generated!',
        description: 'AI has created some initial responses for you.',
      });
    }, 2000);
  };

  const updateResponse = (index: number, value: string) => {
    const newResponses = [...botData.responses];
    newResponses[index] = value;
    setBotData({ ...botData, responses: newResponses });
  };
  
  const removeResponse = (index: number) => {
    const newResponses = botData.responses.filter((_, i) => i !== index);
    setBotData({ ...botData, responses: newResponses });
  }

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Create a New Bot
        </h1>
        <p className="text-muted-foreground">
          Follow the steps to configure and launch your new AI assistant.
        </p>
      </div>

      <div className="relative h-2 w-full rounded-full bg-secondary">
        <div
          className="absolute h-2 rounded-full bg-primary transition-all duration-300"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        ></div>
      </div>

      <div className="min-h-[450px] overflow-hidden">
        {currentStep === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>Step 1: Choose a Template</CardTitle>
              <CardDescription>
                Select a purpose for your bot. You can start with a pre-built
                template or from scratch.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {templates.map(template => (
                  <Card
                    key={template.name}
                    className={cn(
                      'cursor-pointer transition-all hover:shadow-md hover:border-primary',
                      botData.template === template.name &&
                        'border-primary ring-2 ring-primary'
                    )}
                    onClick={() =>
                      setBotData({ ...botData, template: template.name })
                    }
                  >
                    <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                      <div className="text-primary">{template.icon}</div>
                      <div>
                        <CardTitle>{template.name}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        {template.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {currentStep === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>Step 2: Connect and Configure</CardTitle>
              <CardDescription>
                Select your Facebook page and the primary language for your bot.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-2">
                <Label>Facebook Page</Label>
                <Select
                  value={botData.page}
                  onValueChange={value => setBotData({ ...botData, page: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a page" />
                  </SelectTrigger>
                  <SelectContent>
                    {mockPages.map(page => (
                      <SelectItem key={page.id} value={page.id}>
                        {page.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label>Language</Label>
                <RadioGroup
                  defaultValue="en"
                  className="flex gap-4"
                  value={botData.language}
                  onValueChange={(value: 'en' | 'bn') =>
                    setBotData({ ...botData, language: value })
                  }
                >
                  <Label className="flex items-center gap-2 cursor-pointer rounded-md border p-4 hover:bg-accent hover:text-accent-foreground has-[input:checked]:border-primary">
                    <RadioGroupItem value="en" id="en" />
                    English
                  </Label>
                  <Label className="flex items-center gap-2 cursor-pointer rounded-md border p-4 hover:bg-accent hover:text-accent-foreground has-[input:checked]:border-primary">
                    <RadioGroupItem value="bn" id="bn" />
                    Bengali
                  </Label>
                </RadioGroup>
              </div>
            </CardContent>
          </Card>
        )}

        {currentStep === 3 && (
          <Card>
            <CardHeader>
              <CardTitle>Step 3: Generate AI Responses</CardTitle>
              <CardDescription>
                Provide some context about your business, and let our AI
                generate initial responses for you.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="context">Business Context</Label>
                <Textarea
                  id="context"
                  placeholder="e.g., We are a cafe that sells coffee and pastries. We are open from 8am to 6pm..."
                  rows={5}
                  value={botData.context}
                  onChange={e =>
                    setBotData({ ...botData, context: e.target.value })
                  }
                />
              </div>
              <Button onClick={handleGenerateResponses} disabled={isGenerating}>
                {isGenerating ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Sparkles className="mr-2 h-4 w-4" />
                )}
                Generate Responses
              </Button>
              {botData.responses.length > 0 && (
                <div className="grid gap-4">
                  <Label>Generated Responses (Editable)</Label>
                  {botData.responses.map((response, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Input
                        value={response}
                        onChange={e => updateResponse(index, e.target.value)}
                      />
                      <Button variant="ghost" size="icon">
                        <Languages className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive" onClick={() => removeResponse(index)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {currentStep === 4 && (
          <Card>
            <CardHeader>
              <CardTitle>Step 4: Review and Launch</CardTitle>
              <CardDescription>
                Review your bot's configuration before launching.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-md border p-4">
                <h3 className="font-semibold">Configuration Summary</h3>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>
                    <strong>Template:</strong> {botData.template}
                  </li>
                  <li>
                    <strong>Page:</strong>{' '}
                    {mockPages.find(p => p.id === botData.page)?.name || 'N/A'}
                  </li>
                  <li>
                    <strong>Language:</strong> {botData.language === 'en' ? 'English' : 'Bengali'}
                  </li>
                </ul>
              </div>
              <div className="rounded-md border p-4">
                <h3 className="font-semibold">Initial Responses</h3>
                <ul className="mt-2 space-y-2 text-sm text-muted-foreground list-disc list-inside">
                  {botData.responses.map((res, i) => <li key={i}>{res}</li>)}
                </ul>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={handleBack}
          disabled={currentStep === 1}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        {currentStep < totalSteps ? (
          <Button onClick={handleNext}>
            Next <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        ) : (
          <Button asChild>
            <Link href="/dashboard">
              <Bot className="mr-2 h-4 w-4" /> Launch Bot
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}
