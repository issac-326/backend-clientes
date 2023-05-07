"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const esquema = new mongoose_1.default.Schema({
    imagen: String,
    opc: [String],
    tituloRestaurante: [String],
    nomCategoria: String
});
exports.default = mongoose_1.default.model('categorias', esquema);
