import { Request, Response } from 'express'

class IndexControllers{

    constructor(){

    }
    index (req : Request ,res : Response) { 
        res.json({ text : ' API is /api/itens'});
    }
}

export const indexControllers =  new IndexControllers();