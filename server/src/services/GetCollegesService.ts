import prismaClient from "../prisma";

class GetCollegeService {

  async execute() {

    const colleges = await prismaClient.colleges.findMany({
      orderBy: {
        name: "asc"
      }
    });

    return colleges;
  }

}

export { GetCollegeService }

