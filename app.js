const { getLugarLatLgn } = require('./Lugar/lugar')
const { getClima } = require('./clima/clima')
const argv = require('yargs').options({
        direccion: {
            alias: 'd',
            desc: 'Dirección de la ciudad para ver el clima',
            demand: true
        }
    }).argv
    /* 
    getLugarLatLgn(argv.direccion)
        .then(res => console.log(res))


    getClima(37.340000, -121.889999)
        .then(console.log)
        .catch(console.log)

    const getInfo = (direccion) => {

    } */


// Método con promesas:
// const getInfo = function(direccion) {

//     getLugarLatLgn(direccion)
//         .then((res) => {

//             getClima(res.lat, res.lng)
//                 .then(grados => console.log(`La temperatura actual de ${res.direccion} es de ${grados}c`))
//                 .catch(err => console.log('Error, no se pudo determinar el clima' + err))

//         })
//         .catch(err => console.log('Error, no se pudo determinar la direccion' + err))

// }

const getInfo = async(direccion) => {

    try {
        const lugar = await getLugarLatLgn(direccion)
        const temp = await getClima(lugar.lat, lugar.lng)
        return `La temperatura actual de ${lugar.direccion} es de ${temp}c`
    } catch (error) {
        'Error, no se pudo determinar el clima' + error
    }
}

const dir = argv.direccion
getInfo(dir)
    .then(console.log)
    .catch(console.log)