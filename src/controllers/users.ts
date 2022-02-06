import { Request, Response } from "express";

import User, { IUser }from "../models/users";

export const getUsers = async (req: Request, res: Response) => {

    

}

export const createUser = async (req: Request, res: Response) => {

    if(!req.body){
        return res.status(400).json({msg: "Request error."});
    }

    const user = await User.findOne({ email: req.body.email });

    if(user){
        return res.status(400).json({msg: "User already exist."});
    }

    const newUser = new User(req.body);

    newUser.code = 0;
    newUser.status = "Success";
    newUser.data = newUser.data;

    await newUser.data?.save();

    return res.status(201).json(newUser);
}