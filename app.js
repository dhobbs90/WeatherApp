//Imports
const fs = require('fs');
const axios = require('axios');

//Constants
const weatherStackUrl="http://api.weatherstack.com/current";
const mtlCoords="45.5017,-73.5673";
const appSettingsFileName = "appsettings.json";

//variables
let jsonData;
let appSettings;
let apiCallString;

//read app settings from settings.json. This file is intentionally excluded from git
try{
    jsonData = fs.readFileSync(appSettingsFileName);
    appSettings = JSON.parse(jsonData);
}
catch(e){
    console.error(`\FATAL ERROR: Failed to open ${e.path} please create it with the following format and store your weatherstack.com api key\n\
    ${process.cwd()}\\${appSettingsFileName}\n\
    {\n\
        \"apikey\":\"12345676890\"\n\
    \}\n`)
    process.exit(1)
}

//build our api call string for weatherstack in the format:
//http://api.weatherstack.com/current?access_key=1234567890&query=45.5017,-73.5673
apiCallString = `${weatherStackUrl}?access_key=${appSettings.apikey}&query=${mtlCoords}`;

//output http call to console
console.log(`Api Call: ${apiCallString}`);

axios.get(apiCallString)
  .then(function (response) {
    console.log(`it is currently ${response.data.current.weather_descriptions[0]} with a tempature of ${response.data.current.temperature} degrees`)
  })
  .catch(function (error) {
    console.log(error);
  });