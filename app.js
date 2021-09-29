//Imports
const fs = require('fs');
const forcast = require('./utils/forcast')

//Constants
const mtlCoords="45.5017,-73.5673";
const appSettingsFileName = "appsettings.json";

//variables
let jsonData;
let appSettings;

//read app settings from settings.json. 
//This file is intentionally excluded from git to hide our weatherstack.com api key
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

forcast(mtlCoords,appSettings.apikey, (error, data) => {
  console.log('Error',error)
  console.log('data',data)
})