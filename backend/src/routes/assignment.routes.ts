import { Router } from 'express';
import multer from 'multer';
import { AssignmentController } from '../controllers/assignment.controller';

const router = Router();
const upload = multer({ storage: multer.memoryStorage() }); // In-memory
const assignmentController = new AssignmentController();

router.post('/solve', (req, res) => assignmentController.solveAssignment(req, res));
router.post('/upload', upload.single('file'), (req, res) => assignmentController.uploadAndSolve(req, res));
router.post('/humanize', (req, res) => assignmentController.humanize(req, res));

export default router;
