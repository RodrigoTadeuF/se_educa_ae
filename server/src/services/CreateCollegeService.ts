import prismaClient from "../prisma";

class CreateCollegeService {

  async execute(name: string, description: string, url: string, logo_url: string) {

    const colleges = await prismaClient.colleges.create({
        data: {
          name,
          description,
          url,
          logo_url
        }
    })
  }

}

export { CreateCollegeService }