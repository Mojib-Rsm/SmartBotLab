'use server';

/**
 * @fileOverview An AI agent for translating bot responses between English and Bengali.
 *
 * - translateBotResponse - A function that translates the given bot response.
 * - TranslateBotResponseInput - The input type for the translateBotResponse function.
 * - TranslateBotResponseOutput - The return type for the translateBotResponse function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TranslateBotResponseInputSchema = z.object({
  text: z.string().describe('The text to translate.'),
  targetLanguage: z.enum(['en', 'bn']).describe('The target language code: en for English, bn for Bengali.'),
});
export type TranslateBotResponseInput = z.infer<typeof TranslateBotResponseInputSchema>;

const TranslateBotResponseOutputSchema = z.object({
  translatedText: z.string().describe('The translated text.'),
});
export type TranslateBotResponseOutput = z.infer<typeof TranslateBotResponseOutputSchema>;

export async function translateBotResponse(input: TranslateBotResponseInput): Promise<TranslateBotResponseOutput> {
  return translateBotResponseFlow(input);
}

const prompt = ai.definePrompt({
  name: 'translateBotResponsePrompt',
  input: {schema: TranslateBotResponseInputSchema},
  output: {schema: TranslateBotResponseOutputSchema},
  prompt: `Translate the following text to {{targetLanguage}}: "{{text}}"`,
});

const translateBotResponseFlow = ai.defineFlow(
  {
    name: 'translateBotResponseFlow',
    inputSchema: TranslateBotResponseInputSchema,
    outputSchema: TranslateBotResponseOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
