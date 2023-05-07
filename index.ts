import express, {Application, Request, Response, application} from 'express';
import Database from './modules/database';
import { usuariosRouter } from './routers/usuarios.router';
import { categoriasRouter } from './routers/categorias.router';
import { restaurantesRouter } from './routers/restaurantes.router';
import { pedidosRouter } from './routers/pedidos.router';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('../frontend-cliente'));
app.use('/usuarios', usuariosRouter);
app.use('/categorias', categoriasRouter)
app.use('/restaurantes', restaurantesRouter)
app.use('/pedidos', pedidosRouter)

const port: number = 3336;

app.listen(port, ()=>{
    new Database();
    console.log("servidor en linea")
});