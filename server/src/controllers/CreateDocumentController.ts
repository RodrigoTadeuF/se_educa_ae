import { Request, Response } from "express";
import { CreateDocumentService } from "../services/CreateDocumentService";


class CreateDocumentController {

    async handle(request: Request, response: Response) {

      const { title, text, user_id, author_name, description } = request.body;

      const service = new CreateDocumentService();

      const result = await service.execute(title, text, user_id, author_name, description);

      return response.json(result);
    }

}

export { CreateDocumentController }