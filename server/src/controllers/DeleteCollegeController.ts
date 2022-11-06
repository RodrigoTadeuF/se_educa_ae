import { Request, Response } from 'express';
import { DeleteCollegeService } from '../services/DeleteCollegeService';


class DeleteCollegeController {

  async handle(request: Request, response: Response) {

    const { id } = request.params;
    
    const service = new DeleteCollegeService();

    const result =  await service.execute(id);

    return response.json(result);
  }
}

export { DeleteCollegeController }