const fs = require('fs'); // Importar la libreria file system de node

// Usando async / await
async function crearArchivo(base = 1) {
    try {
        let resultado = '';
        const nombreArchivo = `tabla-${base}.txt`;

        for (let i = 1; i <= 10; i++) {
            resultado += `${base} X ${i} = ${base * i}\n`;
        }

        fs.writeFileSync(nombreArchivo, resultado);
        return nombreArchivo;
    }
    catch (err) {
        throw err;
    }
}

// Usando promesas
function crearArchivo2(base = 1) {
    return new Promise((resolve, reject) => {
        try {
            let resultado = '';
            const nombreArchivo = `tabla-${base}.txt`;

            for (let i = 1; i <= 10; i++) {
                resultado += `${base} X ${i} = ${base * i}\n`;
            }

            fs.writeFileSync(nombreArchivo, resultado);
            resolve(nombreArchivo);
        } catch (err) {
            reject(err);
        }
    });
}

module.exports = {
    crearArchivo,
    crearArchivo2,
}