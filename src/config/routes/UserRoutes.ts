import express from "express";

import { UserController } from "../../controllers/UserController";
import { ExpressValidatorRequest } from "../middlewares/ExpressValidatorRequest";
import { createUserSchema } from "../validators/user/createUserValidator";

var router = express.Router();
export class UserRoutes {
    private userController: UserController;
    
    constructor () {
        this.userController = new UserController();   
    }
    get routes () : express.Router {
        
        var controller = this.userController;
        router.post("/users",createUserSchema, ExpressValidatorRequest.validateRequest  , controller.createUser);

        return router;
    }
     
}
