const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { connectionDataBase } = require('../db/config')

class Server {
    constructor() {
        this.app = express();
        this.app.listen(process.env.PORT);

        // Rutas
        this.routes();

        // Middlewares
        this.middlewares();
    }

    middlewares() {
        // Especificar la carpeta que contiene los archivos estaticos
        this.app.use(express.static('public'));

        // Especificar que la informacion que se reciba sera de tipo json
        this.app.use(express.json());

        // Conectar el servidor a la base de datos
        this.connectDB();

        // Configurar el cors para permitir que todos los origenes puedan hacer peticiones a nuestra API
        this.app.use(cors());
    }

    routes() {
        // Importar las rutas creadas para la API
        this.app.use('/api', require('../routes/user'));
    }

    async connectDB() {
        await connectionDataBase();
    }
}

module.exports = Server;