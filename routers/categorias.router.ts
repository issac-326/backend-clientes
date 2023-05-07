import express, {Request, Response, Router} from 'express';
import { obtenerCategorias, obtenerCategoria } from '../controllers/categorias.controller';

export const categoriasRouter: Router= express.Router();

categoriasRouter.get('/', obtenerCategorias);

categoriasRouter.get('/:id/categoria', obtenerCategoria);

