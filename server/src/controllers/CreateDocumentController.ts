import { Request, Response } from "express";
import { CreateDocumentService } from "../services/CreateDocumentService";


class CreateDocumentController {

    async handle(request: Request, response: Response) {

      const { title, content, user_id, description, author_name } = request.body;

      const service = new CreateDocumentService();

      const result = await service.execute(title, content, description, user_id, author_name);

      return response.json(result);
    }

}

export { CreateDocumentController }