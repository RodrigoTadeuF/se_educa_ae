import prismaClient from '../prisma'

class CreateUserService {

  async execute(email: string, name: string, type: string) {
    const user = await prismaClient.user.create({
      data: {
        email,
        name,
        type
      },
      include: {
        documents: true
      }
    });

    return user;

  }
}

export { CreateUserService }