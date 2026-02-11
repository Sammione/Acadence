import { Request, Response } from 'express';
import { AssignmentService } from '../services/assignment.service';

export class AssignmentController {
    private assignmentService: AssignmentService;

    constructor() {
        this.assignmentService = new AssignmentService();
    }

    async solveAssignment(req: Request, res: Response) {
        try {
            const { question, level, tone } = req.body;
            if (!question) return res.status(400).json({ error: 'Question is required' });

            const result = await this.assignmentService.generateAnswer(question, level, tone);
            return res.json(result);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Failed to generate answer' });
        }
    }

    async uploadAndSolve(req: Request, res: Response) {
        try {
            const file = req.file;
            const { level, tone } = req.body;

            if (!file) return res.status(400).json({ error: 'File is required' });

            const result = await this.assignmentService.processFileAndSolve(file, level, tone);
            return res.json(result);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Failed to process file' });
        }
    }

    async humanize(req: Request, res: Response) {
        try {
            const { text, level } = req.body;
            if (!text) return res.status(400).json({ error: 'Text is required' });

            const result = await this.assignmentService.humanizeText(text, level);
            return res.json(result);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Failed to humanize text' });
        }
    }
}
