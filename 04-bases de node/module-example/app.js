const { crearArchivo, crearArchivo2 } = require('./helpers/tabla-multiplicar.js');

console.clear();

crearArchivo(3)
    .then(nombreArchivo => console.log(`Se creo el archivo ${nombreArchivo} correctamente`))
    .catch(err => console.log(err));

crearArchivo2(4)
    .then(nombreArchivo => console.log(`Se creo el archivo ${nombreArchivo} correctamente`))
    .catch(err => console.log(err));