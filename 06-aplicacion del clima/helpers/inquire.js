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
                name: `${"1.".green} Buscar ciudad`,
            },
            {
                value: "2",
                name: `${"2.".green} Historial`,
            },
            {
                value: "3",
                name: `${"3.".green} Salir`,
            }
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

async function mostrarListadoCiudades(ciudades) {
    const choices = ciudades.map((ciudad, indice) => {
        return {
            value: ciudad.id,
            name: `${(++indice + ".").green} ${ciudad.name}`,
        };
    });

    const preguntas = [
        {
            type: "list",
            name: "id",
            message: "Selecciona una ciudad: ",
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

module.exports = {
    inquireMenu,
    pausa,
    leerInput,
    mostrarListadoCiudades,
    confirmar,
};
