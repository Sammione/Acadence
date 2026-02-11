import { Request, Response } from 'express';
import { ResearchService } from '../services/research.service';

export class ResearchController {
    private researchService: ResearchService;

    constructor() {
        this.researchService = new ResearchService();
    }

    async search(req: Request, res: Response) {
        try {
            const query = req.query.q as string;
            const source = req.query.source as string || 'all';

            if (!query) return res.status(400).json({ error: 'Query is required' });

            const results = await this.researchService.searchPapers(query, source);
            return res.json(results);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Failed to search papers' });
        }
    }

    async generateThesis(req: Request, res: Response) {
        try {
            const { topic, level } = req.body;
            if (!topic) return res.status(400).json({ error: 'Topic is required' });

            const result = await this.researchService.generateFullThesis(topic, level);
            return res.json(result);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Failed to generate research' });
        }
    }
}
