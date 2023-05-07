import {Request, Response } from "express";
import usuarioModel from "../models/usuario.model";
import mongoose from "mongoose";

export const obtenerUsuarios = (req: Request, res: Response) =>{
    usuarioModel
        .find({},{})
        .then((result)=>{
            res.send(result);
            res.end();
        })
        .catch((error)=>{
            res.send(error);
            res.end();
        });
};

export const nuevoUsuario = (req: Request, res: Response) => {
	usuarioModel.create({
        correo: req.body.correo,
        contrasena: req.body.contrasena
	})
	.then(updateResponse => {
	  res.send({updateResponse});
	  res.end();
	}).catch(error=>{
	  res.send({message: 'Hubo un error al actualizar', error}); // shorthand
	  res.end();
	});
};
