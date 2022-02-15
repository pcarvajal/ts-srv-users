import { Request, Response } from "express";

import { UserService } from "../app/business/service/UserService";

export class UserController{

    constructor(){
    }
    
    async createUser(req: Request, res: Response){
        const userService = new UserService();
        return await userService.createUser(req, res);
    }
}
