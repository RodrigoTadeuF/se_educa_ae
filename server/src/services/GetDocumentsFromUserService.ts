import prismaClient from "../prisma";

class GetDocumentsFromUserService {

  async execute(user_id: string) {

    const documents = await prismaClient.documents.findMany({
      where: {
        user_id: user_id
      }
    });

    return documents;
  }

}

export { GetDocumentsFromUserService }