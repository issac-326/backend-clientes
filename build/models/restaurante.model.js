"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const esquema = new mongoose_1.default.Schema({
    nombre: String,
    logo: String,
    encabezado: String,
    calificacion: String,
    tiempoEnvio: String,
    precioEnvio: String,
    individuales: [
        {
            nomComida: String,
            descripcion: String,
            imagen: String,
            precio: Number
        }
    ],
    familiares: [
        {
            nomComida: String,
            descripcion: String,
            imagen: String,
            precio: Number
        }
    ],
    complementos: [
        {
            nomComida: String,
            descripcion: String,
            imagen: String,
            precio: Number
        }
    ]
});
exports.default = mongoose_1.default.model('restaurantes', esquema);
