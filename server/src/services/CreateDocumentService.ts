import prismaClient from "../prisma";

class CreateDocumentService {

  async execute(title: string, content: string, description: string, user_id: string, author_name: string) {
    const documents = await prismaClient.documents.create({
      data: {
        title,
        content,
        description,
        user_id,
        author_name
      },
      include: {
        user: true
      }
    });

    return documents;
  }
}

export { CreateDocumentService }