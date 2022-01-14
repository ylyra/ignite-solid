import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const { user_id } = request.headers;

    if (!user_id) {
      return response.status(400).json({ error: "Please fill user_id field!" });
    }

    try {
      const users = this.listAllUsersUseCase.execute({
        user_id: String(user_id),
      });
      return response.json(users);
    } catch {
      return response.status(400).json({
        error: "Mensagem do erro",
      });
    }
  }
}

export { ListAllUsersController };
