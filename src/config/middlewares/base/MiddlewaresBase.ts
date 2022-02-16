import express from "express";
import cors from 'cors';
import morgan from 'morgan';

export class MiddlewaresBase {
    
    static get configuration () {
         var app = express();
         app.use(cors());
         app.use(express.json());
         app.use(morgan('dev'));
         
         return app;
    }    
}
