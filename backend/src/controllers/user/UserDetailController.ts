import { Request, Response } from "express";
import { UserDetailService } from "../../services/user/UserDetailService";

class UserDetailController {
  async handle(req: Request, res: Response) {
    const user_id = req.user_id;

    const detailService = new UserDetailService();

    try {
      const user = await detailService.execute(user_id);
      return res.json(user);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { UserDetailController };
