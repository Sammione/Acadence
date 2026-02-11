import { openai } from '../app';
import pdfParse from 'pdf-parse';

export class AssignmentService {
    async generateAnswer(question: string, level: string = 'Undergraduate', tone: string = 'Formal') {
        try {
            const prompt = `
        You are an expert academic assistant for a ${level} student.
        Tone: ${tone}.
        
        Task: Explain and answer the following assignment question.
        Question: "${question}"
        
        Structure your response as follows:
        1. **Key Concepts Breakdown**: Briefly explain the core concepts.
        2. **Detailed Answer**: Provide a comprehensive, academic answer.
        3. **Further Reading**: Suggest 2-3 topics or real-world examples.
        
        Ensure the output is in natural human English, avoids robotic formatting, and is original.
      `;

            const completion = await openai.chat.completions.create({
                messages: [{ role: 'user', content: prompt }],
                model: 'gpt-4o',
            });

            return {
                content: completion.choices[0].message.content,
                level,
                original_question: question
            };
        } catch (error) {
            throw error;
        }
    }

    async processFileAndSolve(file: Express.Multer.File, level: string = 'Undergraduate', tone: string = 'Formal') {
        try {
            // Only PDF supported for demo
            if (file.mimetype === 'application/pdf') {
                const data = await pdfParse(file.buffer);
                const text = data.text;

                // Extract question from text (Simplified: assume the whole text is context or question)
                // In production, use AI to extract the specific question.
                const prompt = `
            Analyze the following document text and identify the main assignment questions.
            Then, answer them as a ${level} student with a ${tone} tone.
            
            Document Text:
            "${text.substring(0, 3000)}" // Limit to 3000 chars for token limits
         `;

                const completion = await openai.chat.completions.create({
                    messages: [{ role: 'user', content: prompt }],
                    model: 'gpt-4o',
                });

                return {
                    content: completion.choices[0].message.content,
                    level,
                    document_processed: true
                }
            } else {
                throw new Error("Only PDF files are supported for now.");
            }
        } catch (error) {
            throw error;
        }
    }

    async humanizeText(text: string, level: string = 'Undergraduate') {
        try {
            const prompt = `
         Rewrite the following academic text to make it sound more "human" and less "AI-generated".
         Target Audience: ${level} student.
         
         Instructions:
         - Vary sentence length.
         - Use natural transitions.
         - Avoid repetitive structures.
         - Maintain academic integrity but add a personal touch.
         
         Text to Humanize:
         "${text}"
       `;

            const completion = await openai.chat.completions.create({
                messages: [{ role: 'user', content: prompt }],
                model: 'gpt-4o',
            });

            return {
                humanized_content: completion.choices[0].message.content
            }
        } catch (error) {
            throw error;
        }
    }
}
