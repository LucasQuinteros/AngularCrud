import express, { Application } from "express";
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/indexRoutes';
import itemsRoutes from "./routes/itemsRoutes";
import * as MySQLConnector from './database';




class Server{
    app : Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }
    config() : void {
        MySQLConnector.init();
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }
    routes() : void {
        this.app.use('/',indexRoutes);
        this.app.use('/api/items',itemsRoutes);
    }

    start() : void {
        this.app.listen(this.app.get('port'), ()=>{
            console.log(` Server on port`, this.app.get(`port`));
        } );
    }
}

const server = new Server();
server.start();