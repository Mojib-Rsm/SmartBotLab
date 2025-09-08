'use server';

/**
 * @fileOverview Generates a response from the bot based on user input and knowledge base.
 *
 * - generateResponse - The main function to generate a bot response.
 * - GenerateResponseInput - The input type for the generateResponse function.
 * - GenerateResponseOutput - The return type for the generateResponse function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { translateBotResponse } from './translate-bot-responses';
// In a real implementation, you would query your vector DB here.
// For now, we simulate finding relevant knowledge.

const GenerateResponseInputSchema = z.object({
  userId: z.string().describe('The ID of the user sending the message.'),
  userMessage: z.string().describe('The message sent by the user.'),
  botId: z.string().describe('The ID of the bot that should respond.'),
  knowledgeBaseContent: z
    .string()
    .optional()
    .describe('Relevant content retrieved from the knowledge base.'),
  targetLanguage: z.enum(['en', 'bn']).default('en').describe('The target language for the response.'),
});
export type GenerateResponseInput = z.infer<typeof GenerateResponseInputSchema>;

const GenerateResponseOutputSchema = z.object({
  botResponse: z.string().describe('The generated response from the bot.'),
});
export type GenerateResponseOutput = z.infer<
  typeof GenerateResponseOutputSchema
>;

export async function generateResponse(
  input: GenerateResponseInput
): Promise<GenerateResponseOutput> {
  return generateResponseFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateBotResponsePrompt',
  input: { schema: GenerateResponseInputSchema },
  output: { schema: GenerateResponseOutputSchema },
  prompt: `You are an AI assistant for a business. Your goal is to answer user questions based on the provided information.

  User's Message: "{{userMessage}}"

  {{#if knowledgeBaseContent}}
  Use the following information from the business's knowledge base to answer the user's question.
  Your answer should be helpful, friendly, and directly based on this information. Do not make things up.

  Knowledge Base Content:
  ---
  {{{knowledgeBaseContent}}}
  ---
  {{else}}
  The user has asked a question, but there is no specific information in the knowledge base.
  Provide a friendly, general response. You can say that you don't have the information right now but will have an expert get back to them.
  {{/if}}

  Always generate the response in English first.
  `,
});

const generateResponseFlow = ai.defineFlow(
  {
    name: 'generateResponseFlow',
    inputSchema: GenerateResponseInputSchema,
    outputSchema: GenerateResponseOutputSchema,
  },
  async (input) => {
    // In a real app, you would add a step here to:
    // 1. Take the `userMessage`.
    // 2. Generate embeddings for it.
    // 3. Query your vector database to find the most relevant `knowledgeBaseContent`.
    // For this example, we assume the content is passed in directly.

    const { output } = await prompt(input);
    
    if(!output) {
      throw new Error("Could not generate a response.");
    }

    if (input.targetLanguage && input.targetLanguage !== 'en') {
      const translatedResponse = await translateBotResponse({
        text: output.botResponse,
        targetLanguage: input.targetLanguage,
      });
      return { botResponse: translatedResponse.translatedText };
    }

    return output;
  }
);
