import { Request, Response } from "express";
import { UserRepository } from "../../backend/repository/UserRespository";
import { UserService } from "../../business/service/UserService";
import { ICreateUserRequest } from "../../entity/user/ICreateUserRequest";
import { ICreateUserResponse } from "../../entity/user/ICreateUserResponse";


export class UserController{

    private readonly userService: UserService = new UserService();

    constructor(){}
    
    createUser(req: ICreateUserRequest, res: ICreateUserResponse){
        return this.userService.createUser(req, res);
    }
}
