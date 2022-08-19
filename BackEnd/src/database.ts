import {createPool, Pool} from 'mysql2';
import { Item } from './models/item';
import keys from './keys';



let pool : Pool;

export const init = () =>{
    try {
        pool = createPool(keys.database);
        console.debug('MySql Adapter Pool generated successfuly');
        
    } catch (error) {
        console.error('[mysql.connector][init][Error]', error);
        throw new Error("failed to initialized pool");     
    }

}


export const execute = <T>(query : string, params : string[] | Object): Promise<Item[]> => {
    try{
        return new Promise<Item[]>( ( resolve, reject) =>{ 
            pool.query(query,params,(error,results)=>{
                if(error) reject(error);
                else resolve(results);
            });
            
        });
    }
    catch (error){
        console.error('[mysql.connector][execute][Error]: ', error);
        throw new Error('failed to execute MySQL query');
    }
};



