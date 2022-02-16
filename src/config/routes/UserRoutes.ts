import express from "express";

import { UserController } from "../../controllers/UserController";
import { ExpressValidator } from "../middlewares/ExpressValidator";
import { createUserSchema } from "../validators/createUserValidator";

var router = express.Router();
export class UserRoutes {
    private userController: UserController;
    
    constructor () {
        this.userController = new UserController();   
    }
    get routes () : express.Router {
        
        var controller = this.userController;
        router.post("/",createUserSchema, ExpressValidator.validateRequest  , controller.createUser);

        return router;
    }
     
}
