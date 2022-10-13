import express from 'express'

export default class server{
    public app: express.Application;
    public port:number = 6000;
    

    constructor(){
        this.app = express();
    }

    Start(callback:Function) {
        this.app.listen(this.port,callback());
    }
        
    }


