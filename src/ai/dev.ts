import { config } from 'dotenv';
config();

import '@/ai/flows/translate-bot-responses.ts';
import '@/ai/flows/generate-initial-bot-responses.ts';
import '@/ai/flows/generate-bot-templates.ts';
import '@/ai/flows/train-on-content.ts';
