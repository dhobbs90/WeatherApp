//Imports
const axios = require('axios');

//Constants
const weatherStackUrl="http://api.weatherstack.com/current";

//our api call to weatherstack.com
const forcast = (coords, apikey, callback) => {

    //build our api call string for weatherstack in the format:
    //http://api.weatherstack.com/current?access_key=1234567890&query=45.5017,-73.5673
    apiCallString = `${weatherStackUrl}?access_key=${apikey}&query=${coords}`;

    //retrieve weather data from api.weatherstack.com with axios
    axios.get(apiCallString)
        .then(function (response) {
            callback(undefined,{
                forcast: response.data.current.weather_descriptions[0],
                tempature: response.data.current.temperature
            })
        })
        .catch(function (error) {
            callback(error);
        },undefined);
}

module.exports = forcast