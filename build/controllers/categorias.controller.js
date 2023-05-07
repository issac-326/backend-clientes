"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerCategoria = exports.obtenerCategorias = void 0;
const categoria_model_1 = __importDefault(require("../models/categoria.model"));
const obtenerCategorias = (req, res) => {
    categoria_model_1.default
        .find({}, { imagen: true, nomCategoria: true })
        .then((result) => {
        res.send(result);
        res.end();
    })
        .catch((error) => {
        res.send(error);
        res.end();
    });
};
exports.obtenerCategorias = obtenerCategorias;
const obtenerCategoria = (req, res) => {
    categoria_model_1.default
        .findOne({ _id: (req.params.id) }, { opc: true, tituloRestaurante: true, nomCategoria: true })
        .then((result) => {
        res.send(result);
        res.end();
    })
        .catch((error) => {
        res.send(error);
        res.end();
    });
};
exports.obtenerCategoria = obtenerCategoria;
