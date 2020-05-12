const axios = require('axios')

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=b6431a85c8d89e73e16b879e1e154ac2&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}