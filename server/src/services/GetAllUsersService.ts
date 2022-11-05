import prismaClient from "../prisma";

class GetAllUsersService {

  async execute() {

    const users = prismaClient.user.findMany({
      orderBy: {
        name: "asc"
      }
    });

    return users;
  }
}

export { GetAllUsersService }