import {Request, Response} from "express";

import User from "../models/UserModel";
import {ResponseCodes} from "../common/ResponseCodes";
import Responses from "../helpers/ResponseHelper";


export const getUsers = async (req: Request, res: Response) => {

}

export const createUser = async (req: Request, res: Response) => {

    if (!req.body) {
        return res.status(409).json({msg: "Request error."});
    }

    const userEmail = await User.findOne({email: req.body.email});
    const userPhone = await User.findOne({phone: req.body.phone});

    if (userEmail) {
        return res.status(409).json({msg: "User email already exist."});
    }

    if (userPhone) {
        return res.status(409).json({msg: "User phone already exist."});
    }

    const newUser = new User(req.body);

    try {
        await newUser.save();
        const response = new Responses(ResponseCodes.SUCCESS_CODE, ResponseCodes.SUCCESS_DESCRIPTION);
        return res.status(201).json(response.successResponse(newUser));

    } catch (error) {
        const response = new Responses(ResponseCodes.ERROR_CODE, ResponseCodes.ERROR_DESCRIPTION);
        return res.status(500).json(response.errorResponse(error));
    }

}
