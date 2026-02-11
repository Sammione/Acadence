import axios from 'axios';
import { parseStringPromise } from 'xml2js';
import { openai } from '../app';

export class ResearchService {

    async searchPapers(query: string, source: string = 'all') {
        let results: any[] = [];
        if (source === 'all' || source === 'arxiv') {
            const arxivResults = await this.searchArxiv(query);
            results = [...results, ...arxivResults];
        }
        if (source === 'all' || source === 'scholar') {
            const scholarResults = this.mockGoogleScholar(query);
            results = [...results, ...scholarResults];
        }
        return {
            results: results,
            total: results.length,
            source
        };
    }

    async generateFullThesis(topic: string, level: string = 'Undergraduate') {
        try {
            const structurePrompt = `
          You are leading a research team at a top university.
          Topic: "${topic}"
          Level: ${level}
          
          Generate a detailed 7-chapter Thesis/Research Outline.
          For each chapter, provide:
          1. Title
          2. Key research objectives
          3. A 500-word detailed synopsis of the content.
          
          Ensure this is academically rigorous and provides a foundation for a full 100-page dissertation.
          Format the output in clear, structured markdown.
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

    private async searchArxiv(query: string) {
        try {
            const response = await axios.get(`http://export.arxiv.org/api/query?search_query=all:${encodeURIComponent(query)}&start=0&max_results=5`);
            const data = await parseStringPromise(response.data);
            if (!data.feed.entry) return [];
            return data.feed.entry.map((entry: any) => ({
                id: entry.id[0],
                title: entry.title[0].replace(/\n/g, ' ').trim(),
                summary: entry.summary[0].trim(),
                authors: entry.author.map((a: any) => a.name[0]),
                link: entry.id[0],
                pdf: entry.link.find((l: any) => l.$.title === 'pdf')?.$['href'],
                published: entry.published[0],
                source: 'arXiv'
            }));
        } catch (error) {
            console.error("Arxiv Search Error", error);
            return [];
        }
    }

    private mockGoogleScholar(query: string) {
        return [
            {
                id: 'gs_1',
                title: `A Comprehensive Review of ${query} in Modern Contexts`,
                summary: `This paper explores the fundamental aspects of ${query}, providing a detailed analysis of recent trends and future directions...`,
                authors: ['Dr. A. Smith', 'Prof. J. Doe'],
                link: 'https://scholar.google.com',
                pdf: null,
                published: '2025-01-15T10:00:00Z',
                source: 'Google Scholar',
                citations: 142
            },
            {
                id: 'gs_2',
                title: `Impact of ${query} on Global Economics`,
                summary: `We analyze the statistical correlation between ${query} adoption and economic growth indices across 50 countries...`,
                authors: ['K. Johnson', 'M. Lee'],
                link: 'https://scholar.google.com',
                pdf: 'https://example.com/paper.pdf',
                published: '2024-11-20T10:00:00Z',
                source: 'Google Scholar',
                citations: 89
            }
        ]
    }
}
