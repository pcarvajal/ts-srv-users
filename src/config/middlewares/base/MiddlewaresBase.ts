import express from "express";
import cors from "cors";
import morgan from "morgan";
import BaseRoutes from "../../routes/base/BaseRoutes";

export class MiddlewaresBase {
	static get configuration() {
		const app = express();
		app.use(cors());
		app.use(express.json());
		app.use(morgan("dev"));
		app.use(new BaseRoutes().routes);

		return app;
	}
}
