import { Router } from 'express';
import { PlagiarismService } from '../services/plagiarism.service';

const router = Router();
const plagiarismService = new PlagiarismService();

router.post('/check', async (req, res) => {
    const { text } = req.body;
    if (!text) return res.status(400).json({ error: 'Text is required' });
    const result = await plagiarismService.checkSimilarity(text);
    res.json(result);
});

export default router;
