"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.nuevoPedido = void 0;
const pedido_model_1 = __importDefault(require("../models/pedido.model"));
const nuevoPedido = (req, res) => {
    pedido_model_1.default.create({
        id: req.body.id,
        listaProductos: req.body.listaProductos,
        direccion: req.body.direccion
    })
        .then(updateResponse => {
        res.send({ updateResponse });
        res.end();
    }).catch(error => {
        res.send({ message: 'Hubo un error al actualizar', error }); // shorthand
        res.end();
    });
};
exports.nuevoPedido = nuevoPedido;
