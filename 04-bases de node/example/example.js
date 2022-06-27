'use strict';

const fs = require('fs'); // Importar la libreria file system de node
console.clear();

/*
    Funcion para escribir archivos en el sistema, recibe lo siguiente:

    !). Nombre del archivo
    2). Datos que tendra el archivo
    3). Callback para ejecutar despues del resultado
*/
fs.writeFile('Ejemplo.txt', 'Hola mundo', (err) => {
    if (err) throw err;
    console.log('Se genero el archivo correctamente');
});