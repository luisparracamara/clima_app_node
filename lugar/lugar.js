const axios = require("axios");

const getLugarLatLng = async(direccion) => {

    let encodedUrl = encodeURI(direccion);
    const apiKey = "AIzaSyB3pwJBXen9pU6syjpqZHQvoeZOEYoPWsM";
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=${apiKey}`)
        
    if (resp.data.status === "ZERO_RESULTS") {
            throw new Error (`No hay resultado para la ciudad ${direccion}`);
        }
            let location = resp.data.results[0];
            let coordenadas = location.geometry.location;

    return{
        direccion: location.formatted_address,
        lat: coordenadas.lat,
        lng: coordenadas.lng
    }
}

module.exports = {
    getLugarLatLng
}


