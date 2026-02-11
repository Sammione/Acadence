import { Router } from 'express';
import { ResearchController } from '../controllers/research.controller';

const router = Router();
const researchController = new ResearchController();

router.get('/search', (req, res) => researchController.search(req, res));
router.post('/generate-thesis', (req, res) => researchController.generateThesis(req, res));

export default router;
