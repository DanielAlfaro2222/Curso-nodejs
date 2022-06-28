const { v4: uuid } = require("uuid");

class Tarea {
    constructor(description, completado = false, completadoEn = null) {
        this.id = uuid();
        this.description = description;
        this.completado = completado;
        this.completadoEn = completadoEn;
    }
}

module.exports = Tarea;
