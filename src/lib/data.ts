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
