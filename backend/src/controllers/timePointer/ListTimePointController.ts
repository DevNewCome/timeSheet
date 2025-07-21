import {Request, Response} from 'express'
import { ListTimePointService } from '../../services/timePointer/ListTimePointController';

export class ListTimePointController {
 async handle(req: Request, res: Response) {
    try {
      const service = new ListTimePointService();
      const users = await service.execute();

      return res.json(users);
    } catch (err) {
      return res.status(500).json({ error: 'Erro ao listar usuários', details: err.message });
    }
  }
}