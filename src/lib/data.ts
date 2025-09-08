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

export async function getUsers() {
  const res = await fetch('/api/db');
  if (!res.ok) throw new Error('Failed to fetch users');
  return res.json();
}

export async function getPages() {
  // In a real app, you'd fetch this from the server.
  // To keep the example simple, we'll simulate a server fetch.
  // Using a try-catch block to gracefully handle potential errors.
  try {
    const pages = await Promise.resolve(mockPages);
    return pages;
  } catch (error) {
    console.error('Failed to fetch pages:', error);
    return [];
  }
}

export async function getBots() {
  // In a real app, you'd fetch this from the server.
  // To keep the example simple, we'll simulate a server fetch.
  // Using a try-catch block to gracefully handle potential errors.
  try {
    const bots = await Promise.resolve(mockBots);
    return bots;
  } catch (error) {
    console.error('Failed to fetch bots:', error);
    return [];
  }
}
