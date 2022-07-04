const User = require('../models/user');
const bcript = require('bcryptjs');
const { validationResult } = require('express-validator');

// Obtener todos los usuarios
async function controllerUserGET(request, response) {
    response.json({
        usuarios: await User.find({})
    })
}

// Obtener un usuario especifico
async function controllerUserGetById(request, response) {
    const { id } = request.params;
    const respuesta = await User.exists({ _id: id });

    response.json({
        usuario: (respuesta) ? await User.findById(id).exec() : 'El usuario no existe'
    })
}

async function controllerUserPOST(request, response) {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response.status(400).json({
            errors: errors.array()
        })
    }


    let { nombre, correo, contraseña, imagen, rol } = request.body;

    // Validar si el correo ya existe
    const existeCorreo = await User.findOne({ correo });

    if (existeCorreo) {
        return response.status(400).json({
            err: "El correo ya existe"
        })
    }

    // Encriptar la contraseña
    const salt = bcript.genSaltSync(12);
    contraseña = await bcript.hashSync(contraseña, salt);

    const user = new User({ nombre, correo, contraseña, imagen, rol });
    await user.save();

    response.json({
        user
    })
}

async function controllerUserPUT(request, response) {
    const { id } = request.params;

    response.json({
        'message': 'Hola',
        request: 'PUT',
        id
    })
}

async function controllerUserDelete(request, response) {

    response.json({
        'message': 'Hola',
        request: 'DELETE',
    })
}

module.exports = {
    controllerUserGET,
    controllerUserPOST,
    controllerUserPUT,
    controllerUserDelete,
    controllerUserGetById
}