import prisma from '../../prisma/index' // ✅ certo


interface CreateTimePointRequest {
  userId: string;
  date: Date;
  check_in?: Date;
  check_out?: Date;
}

export class CreateTimePointService {
  async execute({ userId, date, check_in, check_out }: CreateTimePointRequest) {
    const timePoint = await prisma.timePoint.create({
      data: {
        user_id: userId,
        date,
        check_in,
        check_out
      }
    });

    return timePoint;
  }
}
