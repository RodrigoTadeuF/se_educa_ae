import { Request, Response } from "express";
import { CreateCollegeService } from "../services/CreateCollegeService";


class CreateCollegeController {

    async handle(request: Request, response: Response) {

      const { name, description, url, logo_url } = request.body;

      const service = new CreateCollegeService();

      const result = await service.execute(name, description, url, logo_url);

      return response.json(result);
    }

}

export { CreateCollegeController }