import { Request, Response } from "express";
import { UserService } from "../service/UserService";


export class UserController{

    private userService: UserService = new UserService();

    constructor(){}
    
    createUser(req: Request, res: Response){
        return this.userService.createUserService(req, res);
    }
}
