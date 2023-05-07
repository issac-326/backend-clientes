import mongoose from 'mongoose';
const esquema = new mongoose.Schema(
    {
        nombre: String,
        logo: String,
        encabezado: String,
        calificacion: String,
        tiempoEnvio: String,
        precioEnvio: String,
        individuales:[
            {
                nomComida: String,
                descripcion: String,
                imagen: String,
                precio: Number
            }
        ],
        familiares:[
            {
                nomComida: String,
                descripcion: String,
                imagen: String,
                precio: Number
            }
        ],
        complementos:[
            {
                nomComida: String,
                descripcion: String,
                imagen: String,
                precio: Number
            }
        ]
    } 
);

export default mongoose.model('restaurantes', esquema);