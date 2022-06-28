"use strict";

const inquirer = require("inquirer");
require("colors");

const preguntas = [
    {
        type: "list",
        name: "opcion",
        message: "¿Qué desea hacer?",
        choices: [
            {
                value: "1",
                name: `${"1.".green} Crear tarea`,
            },
            {
                value: "2",
                name: `${"2.".green} Listar tareas`,
            },
            {
                value: "3",
                name: `${"3.".green} Listar tareas completadas`,
            },
            {
                value: "4",
                name: `${"4.".green} Listar tareas pendientes`,
            },
            {
                value: "5",
                name: `${"5.".green} Completar tarea(s)`,
            },
            {
                value: "6",
                name: `${"6.".green} Borrar tarea`,
            },
            {
                value: "7",
                name: `${"7.".green} Salir`,
            },
        ],
    },
];

async function inquireMenu() {
    console.clear();
    console.log("========================".green);
    console.log("  Seleciona una opcion  ");
    console.log("========================\n".green);

    const { opcion } = await inquirer.prompt(preguntas);

    return opcion;
}

async function pausa() {
    console.log("\n");

    const { opcion } = await inquirer.prompt([
        {
            type: "input",
            name: "opcion",
            message: `Presione ${"enter".green} para continuar`,
        },
    ]);

    return opcion;
}

async function leerInput(mensaje) {
    const pregunta = [
        {
            type: "input",
            name: "respuesta",
            message: mensaje,
            validate(value) {
                if (value.length === 0) {
                    return "Por favor ingrese un valor";
                }

                return true;
            },
        },
    ];

    const { respuesta } = await inquirer.prompt(pregunta);

    return respuesta;
}

async function listadoTareasABorrar(tareas) {
    const choices = tareas.map((tarea, indice) => {
        return {
            value: tarea.id,
            name: `${(++indice + ".").green} ${tarea.description}`,
        };
    });

    const preguntas = [
        {
            type: "list",
            name: "id",
            message: "¿Qué tarea desea borrar?",
            choices: [
                {
                    value: '0',
                    name: `${'0.'.green} Cancelar`
                },
                ...choices
            ],
        },
    ];

    const { id } = await inquirer.prompt(preguntas);

    return id;
}

async function confirmar(mensaje) {
    const preguntas = [
        {
            type: "confirm",
            name: "confirmacion",
            message: mensaje,
        },
    ];

    const { confirmacion } = await inquirer.prompt(preguntas);


    return confirmacion;
}

async function mostrarListadoCheckList(tareas) {
    const choices = tareas.map((tarea, indice) => {
        return {
            value: tarea.id,
            name: `${(++indice + ".").green} ${tarea.description}`,
            checked: tarea.completado
        };
    });

    const preguntas = [
        {
            type: "checkbox",
            name: "listadoTareas",
            message: "Selecciones",
            choices
        },
    ];

    const { listadoTareas } = await inquirer.prompt(preguntas);

    return listadoTareas;
}

module.exports = {
    inquireMenu,
    pausa,
    leerInput,
    listadoTareasABorrar,
    confirmar,
    mostrarListadoCheckList
};
