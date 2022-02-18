import express from "express";
import cors from "cors";
import morgan from "morgan";
import BaseRoutes from "../../routes/base/BaseRoutes";
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import { options } from "../../constants/swaggerOptions";

export class MiddlewaresBase {
	static get configuration() {
		const app = express();
		const specs = swaggerJsDoc(options);

		app.use(cors());
		app.use(express.json());
		app.use(morgan("dev"));
		app.use(new BaseRoutes().routes);
		app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));

		return app;
	}
}
