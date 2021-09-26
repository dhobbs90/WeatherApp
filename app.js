//Imports
const fs = require('fs');
const request = require('request');

//Constants
const baseUrl="http://api.weatherstack.com/";
const mtlCoords="45.5017,-73.5673";
const jsonSettingsFileName = "appsettings.json";

//variables
let jsonData;
let appSettings;
let apiCallString;

//read app settings from settings.json. This file is intentionally excluded from git
try{
    jsonData = fs.readFileSync(jsonSettingsFileName);
    appSettings = JSON.parse(jsonData);
}
catch(e){
    console.error("FATAL ERROR: Failed to open "+e.path+" please create it with the following format and store your weatherstack.com api key\n"
    +process.cwd()+"\\"+jsonSettingsFileName+"\n\
    {\n\
        \"apikey\":\"12345676890\"\n\
    \}\n")
    process.exit(1)
}

//build our api call string for weatherstack in the format:
//http://api.weatherstack.com/current?access_key=1234567890&query=45.5017,-73.5673
apiCallString = baseUrl+"current?access_key="+appSettings.apikey+"&query="+mtlCoords;

//output http call to console
console.log("Api Call: "+apiCallString);

//make our http call to weatherstack.com
request(apiCallString, {json:true}, (error, response, body) =>{
    console.log("it is currently "+body.current.weather_descriptions[0]+" with a tempature of "+body.current.temperature+" degrees")
});