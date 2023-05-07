import {Request, Response } from "express";
import pedidoModel from "../models/pedido.model";
import mongoose from "mongoose";

export const nuevoPedido = (req: Request, res: Response) => {
	pedidoModel.create({
        id: req.body.id,
        listaProductos: req.body.listaProductos,
        direccion: req.body.direccion
	})
	.then(updateResponse => {
	  res.send({updateResponse});
	  res.end();
	}).catch(error=>{
	  res.send({message: 'Hubo un error al actualizar', error}); // shorthand
	  res.end();
	});
};