'use server';

/**
 * @fileOverview An AI agent that generates markdown content based on a user-provided topic.
 *
 * - generateMarkdown - A function that handles the markdown generation process.
 * - GenerateMarkdownInput - The input type for the generateMarkdown function.
 * - GenerateMarkdownOutput - The return type for the generateMarkdown function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateMarkdownInputSchema = z.object({
  topic: z.string().describe('The topic to generate markdown content for.'),
});
export type GenerateMarkdownInput = z.infer<typeof GenerateMarkdownInputSchema>;

const GenerateMarkdownOutputSchema = z.object({
  markdownContent: z.string().describe('The generated markdown content.'),
});
export type GenerateMarkdownOutput = z.infer<typeof GenerateMarkdownOutputSchema>;

export async function generateMarkdown(input: GenerateMarkdownInput): Promise<GenerateMarkdownOutput> {
  return generateMarkdownFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateMarkdownPrompt',
  input: {schema: GenerateMarkdownInputSchema},
  output: {schema: GenerateMarkdownOutputSchema},
  prompt: `Generate markdown content for the following topic:\n\n{{topic}}`,
});

const generateMarkdownFlow = ai.defineFlow(
  {
    name: 'generateMarkdownFlow',
    inputSchema: GenerateMarkdownInputSchema,
    outputSchema: GenerateMarkdownOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
