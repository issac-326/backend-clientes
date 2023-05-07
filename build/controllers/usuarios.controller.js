"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.nuevoUsuario = exports.obtenerUsuarios = void 0;
const usuario_model_1 = __importDefault(require("../models/usuario.model"));
const obtenerUsuarios = (req, res) => {
    usuario_model_1.default
        .find({}, {})
        .then((result) => {
        res.send(result);
        res.end();
    })
        .catch((error) => {
        res.send(error);
        res.end();
    });
};
exports.obtenerUsuarios = obtenerUsuarios;
const nuevoUsuario = (req, res) => {
    usuario_model_1.default.create({
        correo: req.body.correo,
        contrasena: req.body.contrasena
    })
        .then(updateResponse => {
        res.send({ updateResponse });
        res.end();
    }).catch(error => {
        res.send({ message: 'Hubo un error al actualizar', error }); // shorthand
        res.end();
    });
};
exports.nuevoUsuario = nuevoUsuario;
