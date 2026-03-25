'use server';
/**
 * @fileOverview An AI agent that helps clients articulate their FiveM server development requirements by generating a structured project brief from rough ideas.
 *
 * - generateProjectBrief - A function that handles the project brief generation process.
 * - ProjectBriefInput - The input type for the generateProjectBrief function.
 * - ProjectBriefOutput - The return type for the generateProjectBrief function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProjectBriefInputSchema = z.object({
  rawRequirements: z
    .string()
    .describe(
      'Client\u0027s rough ideas and requirements for their FiveM server development project. This can be unstructured text describing what they want.'
    ),
});
export type ProjectBriefInput = z.infer<typeof ProjectBriefInputSchema>;

const ProjectBriefOutputSchema = z.object({
  projectName: z
    .string()
    .describe('A concise and descriptive name for the FiveM development project.'),
  projectDescription: z
    .string()
    .describe(
      'A detailed description of the project, outlining its main purpose, goals, and overall vision based on the client\u0027s input.'
    ),
  keyFeatures: z
    .array(z.string())
    .describe(
      'A list of key functionalities, scripts, or systems to be developed or integrated. Each item should be a distinct feature.'
    ),
  technologiesNeeded: z
    .array(z.string())
    .describe(
      'A list of FiveM-related technologies, frameworks, or programming languages relevant to the project (e.g., VRP, ESX, Lua, MySQL, APIs). Infer these if not explicitly mentioned.'
    ),
  targetAudience: z
    .string()
    .describe('A description of the intended player base or audience for the FiveM server (e.g., roleplay, racing, casual, economy-focused).'),
  urgency: z
    .string()
    .describe(
      'The client\u0027s desired timeline or urgency for the project (e.g., \u0022ASAP\u0022, \u0022within 2-4 weeks\u0022, \u0022flexible\u0022). If not specified, infer a reasonable timeframe or state \u0022Not specified\u0022.'
    ),
  additionalNotes: z
    .string()
    .optional()
    .describe(
      'Any other important notes, constraints, or specific considerations for the project not captured elsewhere.'
    ),
});
export type ProjectBriefOutput = z.infer<typeof ProjectBriefOutputSchema>;

export async function generateProjectBrief(
  input: ProjectBriefInput
): Promise<ProjectBriefOutput> {
  return projectBriefGeneratorFlow(input);
}

const projectBriefGeneratorPrompt = ai.definePrompt({
  name: 'projectBriefGeneratorPrompt',
  input: {schema: ProjectBriefInputSchema},
  output: {schema: ProjectBriefOutputSchema},
  prompt: `You are an AI assistant specialized in generating structured project briefs for FiveM server development.
Your task is to take a client's rough ideas and requirements and transform them into a clear, professional, and structured project brief.

Extract the following information from the client's raw requirements:
- A concise project name.
- A detailed project description, including its purpose and goals.
- A list of key features or functionalities required.
- A list of relevant FiveM technologies, frameworks, or languages (e.g., VRP, ESX, Lua, MySQL, APIs).
- The target audience for the FiveM server.
- The urgency or desired timeline for the project.
- Any other important notes or considerations.

If any information is not explicitly provided, infer it logically based on the context or state that it is \u0022Not specified\u0022 where appropriate.

Client's Raw Requirements:
{{{rawRequirements}}}`,
});

const projectBriefGeneratorFlow = ai.defineFlow(
  {
    name: 'projectBriefGeneratorFlow',
    inputSchema: ProjectBriefInputSchema,
    outputSchema: ProjectBriefOutputSchema,
  },
  async (input) => {
    const {output} = await projectBriefGeneratorPrompt(input);
    return output!;
  }
);
