const axios = require('axios')

const getLugarLatLgn = async(dir) => {

    const encodeURL = encodeURI(dir)
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
        timeout: 9000,
        headers: { 'x-rapidapi-key': '906b1c3629msh6920e2f0abf052fp159cdfjsnf5b5e88ebdcc' }
    });

    const resp = await instance.get()

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para el lugar: ${dir}`)
    }

    const data = resp.data.Results[0]
    const direccion = data.name
    const lat = data.lat
    const lng = data.lon

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLgn
}