import {Request, Response} from 'express'
import {UpdateTimePointService} from '../../services/timePointer/UpdateTimePointService'

export class UpdateTimePointController{
    async handle(req:Request, res: Response){
        const { id } = req.params
        const data = req.body

            try{
                const service = new UpdateTimePointService()
                const updated = await service.execute({id, data})
                    return res.json(updated)
            }catch(error){
               return res.status(500).json({error: 'Erro ao atualizar', details:error.message})
            }
    }
}