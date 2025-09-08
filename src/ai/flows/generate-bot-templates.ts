'use server';

/**
 * @fileOverview AI flow for generating bot templates based on user-selected purpose.
 *
 * - generateBotTemplate - A function that generates a bot template.
 * - GenerateBotTemplateInput - The input type for the generateBotTemplate function.
 * - GenerateBotTemplateOutput - The return type for the generateBotTemplate function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBotTemplateInputSchema = z.object({
  purpose: z
    .string()
    .describe("The intended purpose of the bot (e.g., 'FAQ', 'Customer Support', 'Product Info', 'Hotel', 'E-commerce')."),
  language: z
    .string()
    .describe("The language for the bot's responses (e.g., 'Bengali', 'English')."),
});
export type GenerateBotTemplateInput = z.infer<typeof GenerateBotTemplateInputSchema>;

const GenerateBotTemplateOutputSchema = z.object({
  templateName: z.string().describe('The name of the generated bot template.'),
  templateDescription: z.string().describe('A detailed description of the bot template.'),
  aiResponses: z.array(z.string()).describe('An array of AI-generated responses for the bot.'),
});
export type GenerateBotTemplateOutput = z.infer<typeof GenerateBotTemplateOutputSchema>;

export async function generateBotTemplate(input: GenerateBotTemplateInput): Promise<GenerateBotTemplateOutput> {
  return generateBotTemplateFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateBotTemplatePrompt',
  input: {schema: GenerateBotTemplateInputSchema},
  output: {schema: GenerateBotTemplateOutputSchema},
  prompt: `You are an AI expert in creating bot templates for various purposes and languages.

  Based on the provided purpose and language, generate a bot template with a suitable name, a detailed description, and an array of AI-generated responses.

  Purpose: {{{purpose}}}
  Language: {{{language}}}

  The bot template should be tailored to the specified purpose and language, ensuring that the responses are relevant and accurate.
  Responses should also be short, easy to understand, and fit the use case.
  Example: If the purpose is "FAQ" and the language is "English", the AI responses should be a set of Frequently Asked Questions and their answers.
`,
});

const generateBotTemplateFlow = ai.defineFlow(
  {
    name: 'generateBotTemplateFlow',
    inputSchema: GenerateBotTemplateInputSchema,
    outputSchema: GenerateBotTemplateOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
