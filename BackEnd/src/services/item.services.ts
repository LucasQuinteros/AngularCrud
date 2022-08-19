import { execute } from "../database";
import { ItemQueries } from "../item.queries";
import { Item } from "../models/item";

export const getItems = async() => {
    return execute<Item[]>(ItemQueries.GetItems, []);
}
export const getItemByID = async(id : string) =>{
    return execute<Item>(ItemQueries.GetItem,[id])
}