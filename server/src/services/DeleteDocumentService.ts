import prismaClient from "../prisma";

class DeleteDocumentService {

  async execute(id: string) {

    const document = await prismaClient.documents.deleteMany({
      where: {
        id: id
      }
    });
    
    return document;
    
  }
}

export { DeleteDocumentService }