import {Router} from 'express';

import  itemsControllers  from '../controllers/itemsControllers'

class ItemsRoutes{
    router : Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/pages/:page', itemsControllers.getItems);
        this.router.get('/:id',itemsControllers.getItemByID);
        this.router.get('/search/:name',itemsControllers.getItemByCoincidence);
    }
}

const itemsRoutes = new ItemsRoutes();
export default itemsRoutes.router;