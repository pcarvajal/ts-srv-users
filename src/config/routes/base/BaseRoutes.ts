import express = require("express");
import { UserRoutes } from "../UserRoutes";

var app = express();
class BaseRoutes {
    
    get routes() {
        app.use("/", new UserRoutes().routes);
        return app;
    }
}
export = BaseRoutes;