import { Request, Response } from "express";
import { UserService } from "../app/service/UserService";

export class UserController {

	async createUser(req: Request, res: Response) {
		const userService = new UserService();
		return await userService.createUser(req, res);
	}
}
