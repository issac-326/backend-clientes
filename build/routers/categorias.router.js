"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriasRouter = void 0;
const express_1 = __importDefault(require("express"));
const categorias_controller_1 = require("../controllers/categorias.controller");
exports.categoriasRouter = express_1.default.Router();
exports.categoriasRouter.get('/', categorias_controller_1.obtenerCategorias);
exports.categoriasRouter.get('/:id/categoria', categorias_controller_1.obtenerCategoria);
