import express, {Request, Response, Router} from 'express';
import { obtenerUsuarios, nuevoUsuario } from '../controllers/usuarios.controller';

export const usuariosRouter: Router= express.Router();

usuariosRouter.get('/', obtenerUsuarios);
usuariosRouter.post('/agregarUsuario', nuevoUsuario);
