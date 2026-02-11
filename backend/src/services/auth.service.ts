import jwt from 'jsonwebtoken';

const SECRET = 'scholar_ai_ultra_secret_2026';

export class AuthService {
    // In a real app, this would use a database. 
    // For the investor demo, we use a controlled in-memory store.
    private users: any[] = [];

    async register(email: string, password: string, name: string) {
        if (this.users.find(u => u.email === email)) {
            throw new Error("User already exists");
        }
        const newUser = { id: Date.now().toString(), email, password, name };
        this.users.push(newUser);

        const token = jwt.sign({ id: newUser.id }, SECRET, { expiresIn: '24h' });
        return { user: { id: newUser.id, email, name }, token };
    }

    async login(email: string, password: string) {
        const user = this.users.find(u => u.email === email && u.password === password);
        if (!user) {
            // For demo purposes, if "tester@acadence.com" is used, auto-create it
            if (email === 'tester@acadence.com') {
                return this.register(email, 'password', 'Demo Scholar');
            }
            throw new Error("Invalid credentials");
        }
        const token = jwt.sign({ id: user.id }, SECRET, { expiresIn: '24h' });
        return { user: { id: user.id, email, name: user.name }, token };
    }
}
