// src/ai/flows/flavor-markdown.ts
'use server';

/**
 * @fileOverview AI-powered markdown flavoring tool.
 *
 * This flow takes markdown input and transforms it into a more creative and engaging version by adding metaphors and anecdotes.
 *
 * @param {string} markdown - The markdown content to be flavored.
 * @returns {string} - The flavored markdown content.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FlavorMarkdownInputSchema = z.object({
  markdown: z.string().describe('The markdown content to be flavored.'),
});
export type FlavorMarkdownInput = z.infer<typeof FlavorMarkdownInputSchema>;

const FlavorMarkdownOutputSchema = z.object({
  flavoredMarkdown: z.string().describe('The flavored markdown content.'),
});
export type FlavorMarkdownOutput = z.infer<typeof FlavorMarkdownOutputSchema>;

export async function flavorMarkdown(input: FlavorMarkdownInput): Promise<FlavorMarkdownOutput> {
  return flavorMarkdownFlow(input);
}

const flavorMarkdownPrompt = ai.definePrompt({
  name: 'flavorMarkdownPrompt',
  input: {schema: FlavorMarkdownInputSchema},
  output: {schema: FlavorMarkdownOutputSchema},
  prompt: `You are an AI assistant that helps users make their markdown content more creative and engaging.
  You add metaphors and anecdotes to the markdown content to make it more interesting.
  You should keep the original markdown content intact, but add to it to make it more engaging.

  Here is the markdown content:
  {{markdown}}
  `,
});

const flavorMarkdownFlow = ai.defineFlow(
  {
    name: 'flavorMarkdownFlow',
    inputSchema: FlavorMarkdownInputSchema,
    outputSchema: FlavorMarkdownOutputSchema,
  },
  async input => {
    const {output} = await flavorMarkdownPrompt(input);
    return output!;
  }
);
