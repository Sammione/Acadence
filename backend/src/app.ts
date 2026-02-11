import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { OpenAI } from 'openai';

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
import assignmentRoutes from './routes/assignment.routes';
import researchRoutes from './routes/research.routes';

app.get('/', (req, res) => {
    res.json({ message: 'ScholarAI Backend API Running' });
});

app.use('/api/assignments', assignmentRoutes);
app.use('/api/research', researchRoutes);

// OpenAI Config
export const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
