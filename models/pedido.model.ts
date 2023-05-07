import mongoose from "mongoose";
const esquema = new mongoose.Schema(
    {
        id: String,
        listaProductos: [
            {
                nombreProducto: String,
                precio: Number,
                cantidad: Number
            }
        ],
        direccion: String
    }, { versionKey: false }   
);

export default mongoose.model('pedidos', esquema);

/* */