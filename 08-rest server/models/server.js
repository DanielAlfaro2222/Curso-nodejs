const express = require('express');
require('dotenv').config();
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.app.listen(process.env.PORT);

        // Especificar la carpeta que contiene los archivos estaticos
        this.app.use(express.static('public'));

        // Configurar el cors para permitir que todos los origenes puedan hacer peticiones a nuestra API
        this.app.use(cors());

        // Especificar que la informacion que se reciba sera de tipo json
        this.app.use(express.json());

        // Rutas
        this.routes();
    }

    routes() {
        // Importar las rutas creadas para la API
        this.app.use('/api', require('../routes/routes-api'));
    }
}

module.exports = Server;