import {Request, Response } from "express";
import restauranteModel from "../models/restaurante.model";
import mongoose from "mongoose";

export const obtenerRestaurantes = (req: Request, res: Response) =>{
    restauranteModel
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

export const obtenerInformacionRestaurante = (req: Request, res: Response) =>{
    restauranteModel
        .findOne({nombre: req.params.nombre},{nombre: true,logo: true,encabezado: true,calificacion: true,tiempoEnvio: true,precioEnvio: true})
        .then((result)=>{
            res.send(result);
            res.end();
        })
        .catch((error)=>{
            res.send(error);
            res.end();
        });
};

export const obtenerIndividuales= (req: Request, res: Response) =>{
    restauranteModel
        .findOne({nombre: req.params.nombre},{individuales:true, _id:0})
        .then((result)=>{
            res.send(result);
            res.end();
        })
        .catch((error)=>{
            res.send(error);
            res.end();
        });
};

export const obtenerFamiliares= (req: Request, res: Response) =>{
    restauranteModel
        .findOne({nombre: req.params.nombre},{ familiares:true})
        .then((result)=>{
            res.send(result);
            res.end();
        })
        .catch((error)=>{
            res.send(error);
            res.end();
        });
};

export const obtenerComplementos= (req: Request, res: Response) =>{
    restauranteModel
        .findOne({nombre: req.params.nombre},{ complementos:true})
        .then((result)=>{
            res.send(result);
            res.end();
        })
        .catch((error)=>{
            res.send(error);
            res.end();
        });
};