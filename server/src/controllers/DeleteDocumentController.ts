import { Request, Response } from 'express';
import { DeleteDocumentService } from '../services/DeleteDocumentService';


class DeleteDocumentController {

  async handle(request: Request, response: Response) {

    const { id } = request.params;
    
    const service = new DeleteDocumentService();

    const result =  await service.execute(id);

    return response.json(result);
  }
}

export { DeleteDocumentController }