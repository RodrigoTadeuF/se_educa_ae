import prismaClient from "../prisma";

class DeleteUserService {

  async execute(id: string) {

    const user = await prismaClient.user.deleteMany({
      where: {
        id: id
      }
    });
    
    return user;
    
  }
}

export { DeleteUserService }