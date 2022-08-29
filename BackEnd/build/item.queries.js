"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemQueries = void 0;
exports.ItemQueries = {
    GetItems: `  Select * from products 
                left join categories ON products.CategoryID = categories.CategoryID
                left join estado  ON products.EstadoID = estado.EstadoID                     
                LIMIT 50 
                OFFSET ?`,
    GetItem: ` 
                Select * from products 
                left join categories ON products.CategoryID = categories.CategoryID
                left join estado  ON products.EstadoID = estado.EstadoID 
                where ProductID=?`,
    GetNames: `
                Select * from products 
                left join categories ON products.CategoryID = categories.CategoryID
                left join estado  ON products.EstadoID = estado.EstadoID 
                where ProductName like ?
    `
};
