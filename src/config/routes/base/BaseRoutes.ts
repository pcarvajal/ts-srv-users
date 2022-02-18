import express = require("express");
import { UserRoutes } from "../UserRoutes";

const app = express();
class BaseRoutes {
	get routes() {
		app.use("/", new UserRoutes().routes);
		return app;
	}
}
export = BaseRoutes;
