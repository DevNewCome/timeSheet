import {Request, Response} from 'express'
import {DeleteTimePointService} from '../../services/timePointer/DeleteTimePointService'
export class DeleteTimePointController{
    async handle(req: Request, res: Response){
        const { id } = req.params;

            try{
                const service = new DeleteTimePointService()
                await service.execute(id);                 
            }catch(err){
                return res.status(500).json({error: 'Erro ao deletar ponto', details:err})
            }
    }
}