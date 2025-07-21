import prisma from '../../prisma/index'

export class ListTimePointService { async execute() {
    const users = await prisma.user.findMany({
      orderBy: { created_at: 'desc' },
      include: {
        timePoints: true // opcional: incluir os pontos do usuário
      }
    });

    return users;
  }
}
