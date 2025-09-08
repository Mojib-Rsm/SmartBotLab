'use server';
/**
 * @fileOverview Generates initial responses for a bot based on its selected purpose and page content.
 *
 * - generateInitialBotResponses - A function that generates initial bot responses.
 * - GenerateInitialBotResponsesInput - The input type for the generateInitialBotResponses function.
 * - GenerateInitialBotResponsesOutput - The return type for the generateInitialBotResponses function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateInitialBotResponsesInputSchema = z.object({
  purpose: z.string().describe('The purpose of the bot (e.g., FAQ, Customer Support, Product Info, Hotel, Ecommerce).'),
  pageContent: z.string().describe('The content of the Facebook page the bot is associated with.'),
  language: z.enum(['en', 'bn']).default('en').describe('The language of the bot responses (en for English, bn for Bengali).'),
});
export type GenerateInitialBotResponsesInput = z.infer<typeof GenerateInitialBotResponsesInputSchema>;

const GenerateInitialBotResponsesOutputSchema = z.object({
  responses: z.array(z.string()).describe('An array of initial bot responses.'),
});
export type GenerateInitialBotResponsesOutput = z.infer<typeof GenerateInitialBotResponsesOutputSchema>;

export async function generateInitialBotResponses(input: GenerateInitialBotResponsesInput): Promise<GenerateInitialBotResponsesOutput> {
  return generateInitialBotResponsesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateInitialBotResponsesPrompt',
  input: {
    schema: GenerateInitialBotResponsesInputSchema,
  },
  output: {
    schema: GenerateInitialBotResponsesOutputSchema,
  },
  prompt: `You are an AI assistant tasked with generating initial bot responses based on the bot's purpose and the content of the associated Facebook page.

  Purpose: {{{purpose}}}
  Page Content: {{{pageContent}}}
  Language: {{{language}}}

  Generate a diverse set of initial bot responses that are appropriate for the given purpose and page content. The responses should be engaging, helpful, and relevant to potential user queries.

  {{#eq language "bn"}}
  Translate the responses to Bengali.
  {{/eq}}

  Return an array of strings.
  `,
});

const generateInitialBotResponsesFlow = ai.defineFlow(
  {
    name: 'generateInitialBotResponsesFlow',
    inputSchema: GenerateInitialBotResponsesInputSchema,
    outputSchema: GenerateInitialBotResponsesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
