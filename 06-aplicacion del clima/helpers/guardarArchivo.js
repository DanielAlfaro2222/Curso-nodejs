const fs = require("fs");
const archivo = "./db/db.json";

function guardarBaseDeDatos(datos) {
    fs.writeFileSync(archivo, datos);
}

function leerDB() {
    if (!fs.existsSync(archivo)) {
        return null;
    }

    return JSON.parse(fs.readFileSync(archivo, { encoding: "utf-8" }));
}

module.exports = {
    guardarBaseDeDatos,
    leerDB,
};