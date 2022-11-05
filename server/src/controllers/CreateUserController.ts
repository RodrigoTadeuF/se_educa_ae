import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {

    async handle(request: Request, response: Response) {
      const { email, name, type } = request.body;

      const service = new CreateUserService();
      const result = await service.execute(email, name, type);

      return response.json(result);
    }

}

export { CreateUserController }