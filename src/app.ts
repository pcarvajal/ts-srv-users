import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';

export default class App{

    private app: Application;
    private port: string;
    private apiPaths = {
        users: '/api/users'
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3000';
        this.dbConnection();
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
        //this.app.use( this.apiPaths.users, userRoutes );
    }

    async dbConnection(): Promise<void>{    
        //TODO: connect singleton
    }

    listen(): void{
        // Start server listen
        this.app.listen( this.port, () => {
            console.info(`Server running on port ${this.port}`)
        })
    }
}
