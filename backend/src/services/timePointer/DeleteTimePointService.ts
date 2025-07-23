import prisma from '../../prisma/index'



export class DeleteTimePointService{
    async execute(id:string){
        await prisma.timePoint.delete({where: {id}})
    }
}