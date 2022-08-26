import { json, Request, RequestHandler, Response } from 'express'
import { Item } from '../models/item'
import { execute}  from '../database'
import * as ItemService from '../services/item.services'


class ItemsControllers{

    constructor(){

    }
    index (req : Request ,res : Response) { 
        
        res.json('items');
    
    }
    getItems: RequestHandler = async (req : Request, res: Response) =>{
        try {
            let page  = 50* (Number (req.params.page) -1);
            if(page <= 0 ) page = 0;
            const items = await ItemService.getItems(page);
            
            res.status(200).json(items);
    
        } catch (error) {
            console.error('[teams.controller][getItems][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
            res.status(500).json({
              message: 'There was an error when fetching items'
            });
        }
    }
    getItemByID : RequestHandler = async (req : Request, res : Response) =>{
        try {
            const item = await ItemService.getItemByID(req.params.id);
            res.status(200).json(item);
    
        } catch (error) {
            console.error('[teams.controller][getItembyID][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
            res.status(500).json({
                message: 'There was an error when fetching item by ID'
              });        
        }
    }
}




const itemsControllers =  new ItemsControllers();
export default itemsControllers;