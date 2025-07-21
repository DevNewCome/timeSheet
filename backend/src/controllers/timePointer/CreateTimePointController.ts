import {Request, Response } from 'express'
import { CreateTimePointService } from '../../services/timePointer/CreateTimePointService';

export class CreatePointController{
    async handle(req:Request,res:Response){
         const {userId, date, check_in, check_out} = req.body

        try{ 
            const service = new CreateTimePointService();
            const timePoint = await service.execute({
            userId,
            date,
            check_in,
            check_out
      });
      return res.status(201).json(timePoint)
        }catch(error){
            return res.status(500).json({error:'Erro ao criar ponto', details: error.message}) 
        }
    }
}
