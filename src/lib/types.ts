export type Bot = {
  id: string;
  name: string;
  page: FacebookPage;
  status: 'active' | 'inactive';
  messagesSent: number;
  usersInteracted: number;
  purpose: string;
  language: 'en' | 'bn';
};

export type FacebookPage = {
  id: string;
  name: string;
  access_token?: string; // Important for API calls
};

export type Conversation = {
  id: string;
  userName: string;
  lastMessage: string;
  timestamp: string;
  avatar: string;
};
