import mongoose from 'mongoose';
const esquema = new mongoose.Schema(
    {
        imagen: String,
        opc: [String],
        tituloRestaurante: [String],
        nomCategoria: String
    } 
);

export default mongoose.model('categorias', esquema);