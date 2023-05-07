import express, {Request, Response, Router} from 'express';
import { obtenerRestaurantes, obtenerInformacionRestaurante, obtenerComplementos, obtenerFamiliares, obtenerIndividuales } from '../controllers/restaurantes.controller';

export const restaurantesRouter: Router= express.Router();

restaurantesRouter.get('/', obtenerRestaurantes);
restaurantesRouter.get('/:nombre/informacion', obtenerInformacionRestaurante);
restaurantesRouter.get('/:nombre/individuales', obtenerIndividuales);
restaurantesRouter.get('/:nombre/familiares', obtenerFamiliares);
restaurantesRouter.get('/:nombre/complementos', obtenerComplementos);

