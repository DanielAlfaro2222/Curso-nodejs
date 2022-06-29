const axios = require('axios');
require('dotenv').config();

class Busquedas {
    #historial;

    constructor(datos) {
        this.#historial = datos;
    }

    get historialBusquedas() {
        return this.#historial;
    }

    agregarBusqueda(ciudad, clima) {
        this.#historial[ciudad.id] = {
            nombre: ciudad.name,
            longitud: ciudad.longitud,
            latitud: ciudad.latitud,
            descripcion: clima.descripcion,
            temperatura_minima: clima.min,
            temperatura_maxima: clima.max,
            temperatura: clima.temperatura,
        }
    }

    async buscarCiudad(nombre) {
        try {
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${nombre}.json`,
                params: {
                    'access_token': process.env.API_KEY_MAPBOX,
                    'limit': 6,
                    'language': 'es',
                    'types': 'place'
                }
            });

            return await instance.get()
                .then(res => res.data.features.map(ciudad => {
                    return {
                        id: ciudad.id,
                        name: ciudad.place_name,
                        longitud: ciudad.center[0],
                        latitud: ciudad.center[1]
                    }
                }));
        } catch (err) {
            return [];
        }
    }

    async obtenerInformacionClima(latitud, longitud) {
        try {
            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                params: {
                    'appid': process.env.API_KEY_WEATHER,
                    'lat': latitud,
                    'lon': longitud,
                    'lang': 'es',
                    'units': 'metric'
                }
            });

            return await instance.get()
                .then(res => {
                    return {
                        descripcion: res.data.weather[0].description,
                        min: res.data.main.temp_min,
                        max: res.data.main.temp_max,
                        temperatura: res.data.main.temp,
                    }
                })
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = Busquedas;