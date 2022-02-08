import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';

import "./database/connection";
import usersRoutes from "./routes/users";
import config from "./configuration/config";

export default class App{

    private app: Application;
    private readonly port: string;
    private apiPaths = {
        users: '/api/users'
    }

    constructor(){
        this.app = express();
        this.port = config.APP.PORT;
        this.middlewares();
        this.routes();
    }

    middlewares(): void{
        // Cross domain requests
        this.app.use( cors() );
        // Serialize json request
        this.app.use( express.json() );
        // Request logger
        this.app.use( morgan('dev') );
    }

    routes(): void{
        // Routes register
        this.app.use( this.apiPaths.users, usersRoutes );
    }

    listen(): void{
        // Start server listen
        this.app.listen( this.port, () => {
            console.info(`Server running on port ${this.port}`)
        })
    }
}
