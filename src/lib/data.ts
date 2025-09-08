import type { Bot, FacebookPage } from './types';

export const mockPages: FacebookPage[] = [
  { id: 'page1', name: 'Global Goods Inc.' },
  { id: 'page2', name: 'Tech Innovators' },
  { id: 'page3', name: 'The Cozy Corner Cafe' },
  { id: 'page4', name: 'DreamStay Hotels' },
];

export const mockBots: Bot[] = [
  {
    id: 'bot1',
    name: 'FAQ Bot',
    page: mockPages[0],
    status: 'active',
    messagesSent: 1250,
    usersInteracted: 320,
    purpose: 'FAQ',
    language: 'en',
  },
  {
    id: 'bot2',
    name: 'Support Assistant',
    page: mockPages[1],
    status: 'inactive',
    messagesSent: 850,
    usersInteracted: 150,
    purpose: 'Customer Support',
    language: 'en',
  },
  {
    id: 'bot3',
    name: 'Product Catalog',
    page: mockPages[0],
    status: 'active',
    messagesSent: 3400,
    usersInteracted: 800,
    purpose: 'E-commerce',
    language: 'bn',
  },
  {
    id: 'bot4',
    name: 'Booking Agent',
    page: mockPages[3],
    status: 'active',
    messagesSent: 550,
    usersInteracted: 95,
    purpose: 'Hotel',
    language: 'en',
  },
];

const getBaseUrl = () => {
    if (process.env.NEXT_PUBLIC_VERCEL_URL) {
        return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
    }
    // Check if it's a development environment
    if (process.env.NODE_ENV === 'development') {
      return 'http://localhost:9002';
    }
    // Fallback for other environments, might need adjustment based on deployment
    return 'http://localhost:9002';
};

export async function getUsers() {
  const res = await fetch(`${getBaseUrl()}/api/db`);
  if (!res.ok) throw new Error('Failed to fetch users');
  return res.json();
}

export async function getPages() {
    // In a real app, you'd fetch this from your database.
    // For now, we'll return mock data.
    return Promise.resolve(mockPages);
}

export async function getBots(): Promise<Bot[]> {
  // Use mock data as a fallback if not in a dev environment with DB
  if (process.env.NODE_ENV !== 'development') {
    return Promise.resolve(mockBots);
  }

  try {
    const res = await fetch(`${getBaseUrl()}/api/bots`);
    if (!res.ok) {
        console.error("API call failed, falling back to mock data.");
        return mockBots;
    }
    return res.json();
  } catch (error) {
    console.error("Failed to fetch bots, falling back to mock data:", error);
    return mockBots;
  }
}
