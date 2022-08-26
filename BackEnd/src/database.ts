import {createPool, Pool, RowDataPacket} from 'mysql2';
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


export const execute = <Item>(query : string, params : string[] | Object): Promise<RowDataPacket[]> => {
    try{
        return new Promise<RowDataPacket[]>( ( resolve, reject) =>{ 
            pool.query(query,params,(error,results : RowDataPacket[])=>{
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



