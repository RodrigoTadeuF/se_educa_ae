import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {

    async handle(request: Request, response: Response) {
      const { email, name, type, phone, interest_area, admin } = request.body;

      const service = new CreateUserService();
      const result = await service.execute(email, name, type, phone, interest_area, admin);

      return response.json(result);
    }

}

export { CreateUserController }