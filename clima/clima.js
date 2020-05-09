const axios = require('axios')

const getClima = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0bad290620333ed06a0b25c15fc3ded1&units=metric`)

    return resp.data.main.temp
}

module.exports = {
    getClima
}