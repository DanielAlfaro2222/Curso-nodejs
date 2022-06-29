const Tarea = require("./tarea");

class Tareas {
    #listado;

    constructor(datos) {
        this.#listado = datos;
    }

    getTareas() {
        return this.#listado;
    }

    listadoTareas() {
        let listado = [];

        Object.keys(this.#listado).forEach((tarea) =>
            listado.push(this.#listado[tarea])
        );

        return listado;
    }

    listadoCompletoTareas() {
        if (this.listadoTareas().length === 0) {
            return "        No hay tareas creadas :(";
        } else {
            let resultado = "";
            this.listadoTareas().forEach((item, index) => {
                resultado += `      ${++index}. ${item.description} :: ${item.completado ? "Completado".green : "Pendiente".red
                    }\n`;
            });

            return resultado;
        }
    }

    listadoTareasPendientes() {
        let listado = this.listadoTareas().filter(
            (tarea) => tarea.completado === false
        );

        if (listado.length === 0) {
            return "        No hay tareas pendientes";
        } else {
            let resultado = "";

            listado.forEach((tarea, index) => {
                resultado += `      ${++index}. ${tarea.description} :: ${"Pendiente".red
                    }\n`;
            });

            return resultado;
        }
    }

    listadoTareasCompletadas() {
        let listado = this.listadoTareas().filter((tarea) => tarea.completado);

        if (listado.length === 0) {
            return "        No hay tareas completadas";
        } else {
            let resultado = "";

            listado.forEach((tarea, index) => {
                let fecha = new Date(+tarea.completadoEn);
                fecha = `${fecha.getDate()}/${fecha.getMonth()}/${fecha.getFullYear()} ${String(
                    fecha.getHours()
                ).padStart(2, "0")}:${String(fecha.getMinutes()).padStart(2, "0")}`;

                resultado += `      ${++index}. ${tarea.description} :: ${"Completado".green
                    } :: ${fecha.green}\n`;
            });

            return resultado;
        }
    }

    agregarTarea(description) {
        const tarea = new Tarea(description);

        this.#listado[tarea.id] = tarea;
    }

    borrarTarea(id) {
        delete this.#listado[id];
    }

    completarTareas(tareas) {
        this.listadoTareas().forEach((tarea) => {
            if (tareas.includes(tarea.id)) {
                this.#listado[tarea.id].completado = true;
                this.#listado[tarea.id].completadoEn = new Date().getTime();
            } else {
                this.#listado[tarea.id].completado = false;
                this.#listado[tarea.id].completadoEn = null;
            }
        });
    }
}

module.exports = Tareas;
