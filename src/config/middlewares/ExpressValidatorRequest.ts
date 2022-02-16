import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import {ResponseCodes} from "../entities/ResponseCodesEnum";
import Responses from "../helpers/ResponseHelper";

export class ExpressValidatorRequest{

    constructor(){}

    static validateRequest(request: Request, response: Response, next: NextFunction){
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            const buildResponse = new Responses(ResponseCodes.ERROR_CODE, ResponseCodes.ERROR_DESCRIPTION);
            return response.status(400).json(buildResponse.errorResponse(errors.array()));
        }
        next();
    }
}