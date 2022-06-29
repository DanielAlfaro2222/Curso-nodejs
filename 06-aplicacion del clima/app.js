'use strict';

const { inquireMenu, pausa, leerInput, mostrarListadoCiudades } = require('./helpers/inquire');
const Busquedas = require('./models/busquedas');
const { guardarBaseDeDatos, leerDB } = require('./helpers/guardarArchivo');

async function main() {
    console.clear();
    let opcion;
    const baseDeDatos = leerDB();
    const busquedas = new Busquedas(baseDeDatos ?? {});

    do {
        opcion = await inquireMenu();

        if (opcion === '1') {
            const terminoBusqueda = await leerInput('Ciudad: ');

            let ciudades = await busquedas.buscarCiudad(terminoBusqueda);

            const id = await mostrarListadoCiudades(ciudades);

            const ciudad = ciudades.find(item => item.id === id);

            const clima = await busquedas.obtenerInformacionClima(ciudad.latitud, ciudad.longitud);

            console.log('\n   ----------Informacion de la ciudad----------\n'.green);
            console.log(`   ${'Ciudad:'.green} ${ciudad.name}`);
            console.log(`   ${'Latitud:'.green} ${ciudad.latitud}`);
            console.log(`   ${'Longitud:'.green} ${ciudad.longitud}`);
            console.log(`   ${'Temperatura:'.green} ${clima.temperatura} °C`);
            console.log(`   ${'Temperatura minima:'.green} ${clima.min} °C`);
            console.log(`   ${'Temperatura maxima:'.green} ${clima.max} °C`);
            console.log(`   ${'Como esta el clima:'.green} ${clima.descripcion}`);

            busquedas.agregarBusqueda(ciudad, clima);
        } else if (opcion === '2') {
            let counter = 1;
            const historial = busquedas.historialBusquedas;

            for (let ciudad in historial) {
                console.log(`   ${counter + '.'.green} ${historial[ciudad].nombre} ${historial[ciudad].temperatura}°C`);
                counter++;
            }
        }

        guardarBaseDeDatos(JSON.stringify(busquedas.historialBusquedas, null, "\t"));

        await pausa();
    } while (opcion !== '3');
}

main();