"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./modules/database"));
const usuarios_router_1 = require("./routers/usuarios.router");
const categorias_router_1 = require("./routers/categorias.router");
const restaurantes_router_1 = require("./routers/restaurantes.router");
const pedidos_router_1 = require("./routers/pedidos.router");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static('../frontend-cliente'));
app.use('/usuarios', usuarios_router_1.usuariosRouter);
app.use('/categorias', categorias_router_1.categoriasRouter);
app.use('/restaurantes', restaurantes_router_1.restaurantesRouter);
app.use('/pedidos', pedidos_router_1.pedidosRouter);
const port = 3336;
app.listen(port, () => {
    new database_1.default();
    console.log("servidor en linea");
});
