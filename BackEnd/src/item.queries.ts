export const ItemQueries = {
    GetItems:`  Select * from products 
                left join categories ON products.CategoryID = categories.CategoryID
                left join estado  ON products.EstadoID = estado.EstadoID                     
                LIMIT 50`,
    GetItem: ` 
                Select * from products 
                left join categories ON products.CategoryID = categories.CategoryID
                left join estado  ON products.EstadoID = estado.EstadoID 
                where ProductID=?`
}
