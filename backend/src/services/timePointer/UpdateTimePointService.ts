import  prisma  from "../../prisma/index";

interface IUpdateTimePoint{
    id: string;
    data: {
        date?:Date;
        check_in?:Date;
        check_out?:Date;
    }
}

export class UpdateTimePointService {
   async execute({id, data}:IUpdateTimePoint){
        const updated = await prisma.timePoint.update({
            where: { id },
            data
        })
        return updated
   }
}