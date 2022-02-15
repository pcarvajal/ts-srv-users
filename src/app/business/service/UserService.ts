import {Request, Response} from "express";

import {ResponseCodes} from "../../entity/ResponseCodes";
import Responses from "../../helpers/ResponseHelper";
import { UserRepository } from "../../repository/UserRespository";
import UserSchema from "../../schemas/UserSchema";

export class UserService{

    private userRepository: UserRepository; 

    constructor(){
        this.userRepository = new UserRepository();
    }

    async createUser(req: Request, res: Response){
    
        const newUser = new UserSchema(req.body);

        try {
            await this.userRepository.create(newUser);
            const response = new Responses(ResponseCodes.SUCCESS_CODE, ResponseCodes.SUCCESS_DESCRIPTION);
            return res.status(201).json(response.successResponse(newUser));
    
        } catch (error) {
            const response = new Responses(ResponseCodes.ERROR_CODE, ResponseCodes.ERROR_DESCRIPTION);
            return res.status(500).json(response.errorResponse(error));
        }
    }

}