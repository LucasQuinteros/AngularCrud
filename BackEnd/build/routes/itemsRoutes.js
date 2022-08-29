"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const itemsControllers_1 = __importDefault(require("../controllers/itemsControllers"));
class ItemsRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/pages/:page', itemsControllers_1.default.getItems);
        this.router.get('/:id', itemsControllers_1.default.getItemByID);
        this.router.get('/search/:name', itemsControllers_1.default.getItemByCoincidence);
    }
}
const itemsRoutes = new ItemsRoutes();
exports.default = itemsRoutes.router;
