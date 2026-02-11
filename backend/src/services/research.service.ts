import axios from 'axios';
import { parseStringPromise } from 'xml2js';

export class ResearchService {

    async searchPapers(query: string, source: string = 'all') {
        let results: any[] = [];

        // 1. Search arXiv (Open Access, CS/Math/Physics)
        if (source === 'all' || source === 'arxiv') {
            const arxivResults = await this.searchArxiv(query);
            results = [...results, ...arxivResults];
        }

        // 2. Mock Google Scholar (Since no official free API exists without SerpApi)
        // We will generate mocked "High Quality" results to demonstrate the UI
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

    private async searchArxiv(query: string) {
        try {
            // arXiv API: http://export.arxiv.org/api/query?search_query=all:electron&start=0&max_results=5
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
        // Return realistic-looking mock data for demo
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
