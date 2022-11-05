import { Request, Response } from 'express';
import { GetCollegeService } from '../services/GetCollegesService';

class GetCollegeController {
  async handle(request: Request, response: Response) {
    
    const service = new GetCollegeService();

    const result =  await service.execute();

    return response.json(result);
    
  }
}

export { GetCollegeController }