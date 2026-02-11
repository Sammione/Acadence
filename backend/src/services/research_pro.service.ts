import { openai } from '../app';

export class ResearchService {
    // Existing methods for search papers... (I will keep them in the real file during update)

    async generateFullThesis(topic: string, level: string = 'Undergraduate') {
        try {
            // For a "100-page" detailed research, we generate a high-quality multi-chapter structure 
            // with substantial depth for each chapter.

            const structurePrompt = `
        You are leading a research team at a top university.
        Topic: "${topic}"
        Level: ${level}
        
        Generate a detailed 7-chapter Thesis/Research Outline.
        For each chapter, provide:
        - Title
        - Key research objectives
        - A 500-word detailed synopsis of the content.
        
        Ensure this is academically rigorous and provides a foundation for a full 100-page dissertation.
      `;

            const completion = await openai.chat.completions.create({
                messages: [{ role: 'user', content: structurePrompt }],
                model: 'gpt-4o',
            });

            return {
                topic,
                chapters: completion.choices[0].message.content,
                timestamp: new Date().toISOString()
            };
        } catch (error) {
            throw error;
        }
    }
}
