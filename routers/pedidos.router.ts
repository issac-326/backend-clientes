import express, {Request, Response, Router} from 'express';
import { nuevoPedido } from '../controllers/pedidos.controller';
import mongoose from 'mongoose';

export const pedidosRouter: Router= express.Router();

pedidosRouter.post('/nuevo', nuevoPedido);