import { execute } from "../database";
import { ItemQueries } from "../item.queries";
import { Item } from "../models/item";

export const getItems = async(page : number) => {
    return execute<Item[]>(ItemQueries.GetItems, [page]);
}
export const getItemByID = async(id : string) =>{
    return execute<Item>(ItemQueries.GetItem,[id]);
}
export const getNamesByCoincidence = async ( name : string ) =>{
    return execute<Item[]>(ItemQueries.GetNames, [name]);
}