import {Request, Response} from "express";

import {ResponseCodes} from "../../entity/common/ResponseCodes";
import Responses from "../../common/helpers/ResponseHelper";
import { UserRepository } from "../../backend/repository/UserRespository";
import UserSchema from "../../backend/schemas/UserSchema";
import { IUserEntiy } from "../../backend/models/IUserModel";

export class UserService{

    private userRepository: UserRepository; 

    constructor(){
        this.userRepository = new UserRepository();
    }

    public async createUser(req: Request, res: Response){
    
        const userEmail = await this.userRepository.find({email: req.body.email});
        const userPhone = await this.userRepository.find({phone: req.body.phone});
    
        if (userEmail) {
            return res.status(409).json({msg: "User email already exist."});
        }
    
        if (userPhone) {
            return res.status(409).json({msg: "User phone already exist."});
        }
    
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