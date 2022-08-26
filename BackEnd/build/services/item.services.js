"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItemByID = exports.getItems = void 0;
const database_1 = require("../database");
const item_queries_1 = require("../item.queries");
const getItems = (page) => __awaiter(void 0, void 0, void 0, function* () {
    return (0, database_1.execute)(item_queries_1.ItemQueries.GetItems, [page]);
});
exports.getItems = getItems;
const getItemByID = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return (0, database_1.execute)(item_queries_1.ItemQueries.GetItem, [id]);
});
exports.getItemByID = getItemByID;
