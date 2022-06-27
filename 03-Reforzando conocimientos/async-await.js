'use strict';

const empleados = [
    {
        id: 1,
        name: 'Daniel'
    },
    {
        id: 2,
        name: 'Sara'
    },
    {
        id: 3,
        name: 'Marcela'
    }
];

const getNamePromise = async (empleado) => {
    return empleado.name;
}

const getEmpleadoPromise = async (id) => {
    try {
        let empleado = empleados.find(element => element.id === id);

        empleado = await getNamePromise(empleado)
            .then(result => console.log(result));
    } catch {
        console.log('No existe el empleado');
    }
}

getEmpleadoPromise(1); // Daniel
getEmpleadoPromise(2); // Sara
getEmpleadoPromise(5); // No se encontro el empleado
getEmpleadoPromise(4); // No se encontro el empleado