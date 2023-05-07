"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerComplementos = exports.obtenerFamiliares = exports.obtenerIndividuales = exports.obtenerInformacionRestaurante = exports.obtenerRestaurantes = void 0;
const restaurante_model_1 = __importDefault(require("../models/restaurante.model"));
const obtenerRestaurantes = (req, res) => {
    restaurante_model_1.default
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
exports.obtenerRestaurantes = obtenerRestaurantes;
const obtenerInformacionRestaurante = (req, res) => {
    restaurante_model_1.default
        .findOne({ nombre: req.params.nombre }, { nombre: true, logo: true, encabezado: true, calificacion: true, tiempoEnvio: true, precioEnvio: true })
        .then((result) => {
        res.send(result);
        res.end();
    })
        .catch((error) => {
        res.send(error);
        res.end();
    });
};
exports.obtenerInformacionRestaurante = obtenerInformacionRestaurante;
const obtenerIndividuales = (req, res) => {
    restaurante_model_1.default
        .findOne({ nombre: req.params.nombre }, { individuales: true, _id: 0 })
        .then((result) => {
        res.send(result);
        res.end();
    })
        .catch((error) => {
        res.send(error);
        res.end();
    });
};
exports.obtenerIndividuales = obtenerIndividuales;
const obtenerFamiliares = (req, res) => {
    restaurante_model_1.default
        .findOne({ nombre: req.params.nombre }, { familiares: true })
        .then((result) => {
        res.send(result);
        res.end();
    })
        .catch((error) => {
        res.send(error);
        res.end();
    });
};
exports.obtenerFamiliares = obtenerFamiliares;
const obtenerComplementos = (req, res) => {
    restaurante_model_1.default
        .findOne({ nombre: req.params.nombre }, { complementos: true })
        .then((result) => {
        res.send(result);
        res.end();
    })
        .catch((error) => {
        res.send(error);
        res.end();
    });
};
exports.obtenerComplementos = obtenerComplementos;
