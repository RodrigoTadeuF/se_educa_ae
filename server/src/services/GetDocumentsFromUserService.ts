import prismaClient from "../prisma";

class GetDocumentsFromUserService {

  async execute(user_id: string) {

    console.log(user_id)

    const documents = await prismaClient.documents.findMany({
      where: {
        user_id: user_id
      }
    });

    console.log(documents);
    return documents;
  }

}

export { GetDocumentsFromUserService }