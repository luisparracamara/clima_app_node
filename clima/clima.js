const axios = require("axios");

const getClima = async(lat,lng) =>{
    //axios
    const apiKey = "ec0bfd5717c01c90f34f480524c92f4e";
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${apiKey}`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}