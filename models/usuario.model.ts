import mongoose from 'mongoose';
const esquema = new mongoose.Schema(
    {
        correo: String,
        contrasena: String
    }, { versionKey: false }
);

export default mongoose.model('usuarios', esquema);