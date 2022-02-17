import { CustomValidator, Location } from 'express-validator';
import { Request } from "express";

import { UserRepository } from "../../../../app/repository/UserRespository";

export class UserCustomValidators{

    constructor(){
    }

    async isValidEmailUser(value: any){

        const userRepository = new UserRepository();
        console.log("Entra a validar");
        
        const user = await userRepository.find({ email: value });

        if(Array.isArray(user) && user.length > 0){
            return Promise.reject('Email already exist!');
        }

        return Promise.resolve();
    }

    async isValidPhoneUser(value: any){
        const userRepository = new UserRepository();
        console.log("Entra a validar");
        
        const user = await userRepository.find({ phone: value });

        if(Array.isArray(user) && user.length > 0){
            return Promise.reject('Phone already exist!');
        }

        return Promise.resolve();
    }
}