import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';

export class AuthController {
    private authService: AuthService;

    constructor() {
        this.authService = new AuthService();
    }

    async register(req: Request, res: Response) {
        try {
            const { email, password, name } = req.body;
            const user = await this.authService.register(email, password, name);
            return res.json(user);
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }

    async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body;
            const result = await this.authService.login(email, password);
            return res.json(result);
        } catch (error: any) {
            return res.status(401).json({ error: error.message });
        }
    }

    async getMe(req: Request, res: Response) {
        // Basic placeholder for session check
        return res.json({ id: '1', name: 'Scholar User', email: 'user@acadence.com', level: 'Undergraduate' });
    }
}
