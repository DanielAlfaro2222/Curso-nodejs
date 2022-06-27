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

const getNamePromise = (empleado) => {
    return new Promise((resolve, reject) => {

        (empleado) ? resolve(empleado) : reject('No se encontro al usuario');
    }).then(result => console.log(result.name))
        .catch(err => console.log(err));
}

const getEmpleadoPromise = (id) => {
    return new Promise((resolve, reject) => {
        let empleado = empleados.find(element => element.id === id);

        (empleado) ? resolve(empleado) : reject('No se encontro al usuario')
    })
        .then((result) => getNamePromise(result))
        .catch((err) => console.log(err));
};

getEmpleadoPromise(1); // Daniel
getEmpleadoPromise(2); // Sara
getEmpleadoPromise(4); // No se encontro al usuario