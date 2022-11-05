import prismaClient from "../prisma";

class CreateDocumentService {

  async execute(title: string, description: string, text: string, author_name: string, user_id: string) {

    const documents = await prismaClient.documents.create({
      data: {
        title,
        description,
        text,
        author_name,
        user_id,     
      },
      include: {
        user: true
      }
    });

    

    return documents;

  }
}

export { CreateDocumentService }