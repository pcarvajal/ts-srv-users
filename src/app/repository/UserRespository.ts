import { IUserModel } from "../models/IUserModel";
import { BaseRepository } from "./base/BaseRepository";
import UserSchema from "../schemas/UserSchema";

export class UserRepository extends BaseRepository<IUserModel>{
    
    constructor(){
        super(UserSchema);
    }

}