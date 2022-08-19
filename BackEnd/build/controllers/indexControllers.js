"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexControllers = void 0;
class IndexControllers {
    constructor() {
    }
    index(req, res) {
        res.json({ text: ' API is /api/itens' });
    }
}
exports.indexControllers = new IndexControllers();
