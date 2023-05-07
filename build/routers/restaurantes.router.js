"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.restaurantesRouter = void 0;
const express_1 = __importDefault(require("express"));
const restaurantes_controller_1 = require("../controllers/restaurantes.controller");
exports.restaurantesRouter = express_1.default.Router();
exports.restaurantesRouter.get('/', restaurantes_controller_1.obtenerRestaurantes);
exports.restaurantesRouter.get('/:nombre/informacion', restaurantes_controller_1.obtenerInformacionRestaurante);
exports.restaurantesRouter.get('/:nombre/individuales', restaurantes_controller_1.obtenerIndividuales);
exports.restaurantesRouter.get('/:nombre/familiares', restaurantes_controller_1.obtenerFamiliares);
exports.restaurantesRouter.get('/:nombre/complementos', restaurantes_controller_1.obtenerComplementos);
