import prismaClient from '../prisma'

class CreateUserService {

  async execute(email: string, name: string, type: string, phone: string, interest_area: string, admin: boolean) {
    const user = await prismaClient.user.create({
      data: {
        email,
        name,
        type,
        phone,
        interest_area,
        admin
      },
      include: {
        documents: true
      }
    });

    return user;
  }
}

export { CreateUserService }