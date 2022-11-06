import { Request, Response } from 'express';
import { GetDocumentsFromUserService } from '../services/GetDocumentsFromUserService';

class GetDocumentsFromUserController {

  async handle(request: Request, response: Response) {

    const { id } = request.params;
    
    const service = new GetDocumentsFromUserService();

    const result =  await service.execute(id);

    return response.json(result);
  }
}

export { GetDocumentsFromUserController }