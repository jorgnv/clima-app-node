const axios = require('axios');

const getClima = async(lat, lng) => {

    const respuesta=await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=7a3801cd57f9255ea8d330c5cb55c22b&units=metric`);
    
    return respuesta.data.main.temp;
}

module.exports={
    getClima
}