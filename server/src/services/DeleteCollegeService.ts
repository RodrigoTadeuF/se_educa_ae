import prismaClient from "../prisma";

class DeleteCollegeService {

  async execute(id: string) {

    const college = await prismaClient.colleges.deleteMany({
      where: {
        id: id
      }
    });
    
    return college;
    
  }
}

export { DeleteCollegeService }