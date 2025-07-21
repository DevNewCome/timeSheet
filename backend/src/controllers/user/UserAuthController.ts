import { Request, Response } from 'express';
import { UserAuthService } from '../../services/user/UserAuthService';

class UserAuthController {
    async handle(req: Request, res: Response) {
        const { email, password } = req.body;

        try {
            const userAuthService = new UserAuthService();
            const result = await userAuthService.execute({ email, password });
            return res.json(result);

        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }
}

export { UserAuthController };
