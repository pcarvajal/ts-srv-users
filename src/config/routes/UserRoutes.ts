import express from "express";

import { UserController } from "../../controllers/UserController";

var router = express.Router();
export class UserRoutes {
    private userController: UserController;
    
    constructor () {
        this.userController = new UserController();   
    }
    get routes () : express.Router {
        
        var controller = this.userController;
        router.post("/", controller.createUser);

        return router;
    }
     
}
