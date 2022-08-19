"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = exports.init = void 0;
const mysql2_1 = require("mysql2");
const keys_1 = __importDefault(require("./keys"));
let pool;
const init = () => {
    try {
        pool = (0, mysql2_1.createPool)(keys_1.default.database);
        console.debug('MySql Adapter Pool generated successfuly');
    }
    catch (error) {
        console.error('[mysql.connector][init][Error]', error);
        throw new Error("failed to initialized pool");
    }
};
exports.init = init;
const execute = (query, params) => {
    try {
        return new Promise((resolve, reject) => {
            pool.query(query, params, (error, results) => {
                if (error)
                    reject(error);
                else
                    resolve(results);
            });
        });
    }
    catch (error) {
        console.error('[mysql.connector][execute][Error]: ', error);
        throw new Error('failed to execute MySQL query');
    }
};
exports.execute = execute;
