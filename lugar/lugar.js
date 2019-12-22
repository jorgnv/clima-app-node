const axios = require('axios');

const getLugarLatLng = async(dir) =>{

    const encodeURL = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
        headers: {'X-RapidAPI-Key': 'b0731685d0msh0a5384bbd2e8703p18ca4cjsnd60178e43978'}
    });
    
    const respuesta = await instance.get();

    if (respuesta.data.Results.length === 0) {
        throw new Error(`No hay resultados para esta ciudad ${dir}`);
    }

    const data = respuesta.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports ={
    getLugarLatLng
}