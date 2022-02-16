import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from "mongoose";

import { UserRoutes } from "./config/routes/UserRoutes";
import config from "./config/constants/Constants";
import { MiddlewaresBase } from "./config/middlewares/base/MiddlewaresBase";

export default class App{

    private app: Application;
    private readonly port: string;
    private apiPaths = {
        users: '/api/users'
    }

    constructor(){
        this.app = express();
        this.port = config.APP.PORT;
        this.database();
        this.middlewares();
        this.routes();

    }

    middlewares(): void{
        this.app.use(MiddlewaresBase.configuration);
    }

    routes(): void{
        // Routes register
        this.app.use( this.apiPaths.users, new UserRoutes().routes );
    }

    database(): void{
        mongoose.connect(config.DB.URI);

        const connection = mongoose.connection;

        connection.once("open", () => {
            console.info("Database connection stablished");
        });

        connection.on("error", error => {
            console.error(error);
            process.exit(0);
        });
    }

    listen(): void{
        // Start server listen
        this.app.listen( this.port, () => {
            console.info(`Server running on port ${this.port}`)
        })
    }
}
