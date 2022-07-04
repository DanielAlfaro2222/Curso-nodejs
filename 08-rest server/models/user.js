const { Schema, model } = require('mongoose');

const userSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El campo nombre es obligatorio'],
    },
    correo: {
        type: String,
        required: [true, 'El campo correo es obligatorio'],
        unique: true
    },
    contraseña: {
        type: String,
        required: [true, 'El campo contraseña es obligatorio'],
    },
    imagen: {
        type: String,
        required: false,
    },
    rol: {
        type: String,
        required: true,
        enum: ['Admin', 'Usuario']
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    },
});

module.exports = model('User', userSchema);