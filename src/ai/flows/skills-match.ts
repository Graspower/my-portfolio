/**
 * @fileOverview AI-powered tool to match project descriptions with relevant skills.
 *
 * - skillsMatch - Function to analyze project descriptions and identify relevant skills.
 * - SkillsMatchInput - Input type for the skillsMatch function.
 * - SkillsMatchOutput - Return type for the skillsMatch function.
 */

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SkillsMatchInputSchema = z.object({
  projectDescription: z
    .string()
    .describe('The description of the project to analyze.'),
  userSkills: z
    .array(z.string())
    .describe('An array of the user available skills.'),
});

export type SkillsMatchInput = z.infer<typeof SkillsMatchInputSchema>;

const SkillsMatchOutputSchema = z.object({
  matchedSkills: z
    .array(z.string())
    .describe('The skills from the user skills that match the project description.'),
});

export type SkillsMatchOutput = z.infer<typeof SkillsMatchOutputSchema>;

export async function skillsMatch(input: SkillsMatchInput): Promise<SkillsMatchOutput> {
  return skillsMatchFlow(input);
}

const skillsMatchPrompt = ai.definePrompt({
  name: 'skillsMatchPrompt',
  input: {schema: SkillsMatchInputSchema},
  output: {schema: SkillsMatchOutputSchema},
  prompt: `You are an expert at matching skills to project descriptions.

  Given the following project description:
  {{projectDescription}}

  And the following list of skills:
  {{#each userSkills}}
  - {{{this}}}
  {{/each}}

  Identify the skills that are most relevant to the project description. Only return skills that are in the userSkills list. Return them as a list.`,
});

const skillsMatchFlow = ai.defineFlow(
  {
    name: 'skillsMatchFlow',
    inputSchema: SkillsMatchInputSchema,
    outputSchema: SkillsMatchOutputSchema,
  },
  async input => {
    const {output} = await skillsMatchPrompt(input);
    return output!;
  }
);
