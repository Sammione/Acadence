import { Router } from 'express';
import { ResearchController } from '../controllers/research.controller';

const router = Router();
const researchController = new ResearchController();

router.get('/search', (req, res) => researchController.search(req, res));

export default router;
