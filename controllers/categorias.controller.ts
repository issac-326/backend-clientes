import {Request, Response } from "express";
import categoriaModel from "../models/categoria.model";
import mongoose from "mongoose";

export const obtenerCategorias = (req: Request, res: Response) =>{
    categoriaModel
        .find({},{ imagen: true, nomCategoria: true})
        .then((result)=>{
            res.send(result);
            res.end();
        })
        .catch((error)=>{
            res.send(error);
            res.end();
        });
};

export const obtenerCategoria = (req: Request, res: Response) =>{
    categoriaModel
        .findOne({_id: (req.params.id)},{ opc: true, tituloRestaurante: true, nomCategoria: true})
        .then((result)=>{
            res.send(result);
            res.end();
        })
        .catch((error)=>{
            res.send(error);
            res.end();
        });
};
