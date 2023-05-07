"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pedidosRouter = void 0;
const express_1 = __importDefault(require("express"));
const pedidos_controller_1 = require("../controllers/pedidos.controller");
exports.pedidosRouter = express_1.default.Router();
exports.pedidosRouter.post('/nuevo', pedidos_controller_1.nuevoPedido);
