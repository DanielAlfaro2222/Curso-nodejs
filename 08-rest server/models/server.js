const express = require('express');
require('dotenv').config();
const { controllerApiDelete, controllerApiPOST, controllerApiPUT, controllerApiGET } = require('../controllers/controllers');

class Server {
    constructor() {
        this.app = express();
        this.app.listen(process.env.PORT);

        // Especificar la carpeta que contiene los archivos estaticos
        this.app.use(express.static('public'));

        // Rutas
        this.routes();
    }

    routes() {
        this.app.get('/api', controllerApiGET);

        this.app.post('/api', controllerApiPOST);

        this.app.put('/api', controllerApiPUT);

        this.app.delete('/api', controllerApiDelete);
    }
}

module.exports = Server;