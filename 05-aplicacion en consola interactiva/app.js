"use strict";

const { guardarBaseDeDatos, leerDB } = require("./helpers/guardarArchivo.js");
// const { mostrarMenu } = require("./helpers/mensajes.js");
const {
    inquireMenu,
    pausa,
    leerInput,
    listadoTareasABorrar,
    confirmar,
    mostrarListadoCheckList,
} = require("./helpers/inquire.js");

const Tareas = require("./models/tareas.js");

async function main() {
    console.clear();

    let opcion = "";
    const baseDeDatos = leerDB();
    const tareas = new Tareas(baseDeDatos === null ? {} : baseDeDatos);

    do {
        opcion = await inquireMenu();

        if (opcion === "1") {
            const description = await leerInput("Ingrese la descripcion: ");

            tareas.agregarTarea(description);
        } else if (opcion === "2") {
            console.log(tareas.listadoCompletoTareas());
        } else if (opcion === "3") {
            console.log(tareas.listadoTareasCompletadas());
        } else if (opcion === "4") {
            console.log(tareas.listadoTareasPendientes());
        } else if (opcion === "5") {
            if (tareas.listadoTareas().length === 0) {
                console.log('       No hay tareas creadas :(');
            } else {
                const tareasConfirmadas = await mostrarListadoCheckList(tareas.listadoTareas());

                tareas.completarTareas(tareasConfirmadas);
                console.log('       Tarea(s) completada(s)');
            }
        } else if (opcion === "6") {
            const id = await listadoTareasABorrar(tareas.listadoTareas());

            if (id !== '0') {
                const confimacion = await confirmar("Desea eliminar esta tarea ");

                if (confimacion) {
                    tareas.borrarTarea(id);
                    console.log("       Tarea eliminada exitosamente");
                }
            }

        }

        guardarBaseDeDatos(JSON.stringify(tareas.getTareas(), null, "\t"));

        await pausa();
    } while (opcion !== "7");
}

main();
