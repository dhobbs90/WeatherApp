//Imports
const fs = require('fs');

//variables
let jsonData;
let appSettings;

//read app settings from settings.json. This file is intentionally excluded from git
try{
    jsonData = fs.readFileSync('appsettings.json');
}
catch(e){
    console.log(e)
    console.error("ERROR:"+e.errno+" Failed to open "+e.path+" please create it with the following format and store your weatherstack.com api key:\n\
    {\n\
        apikey:1234567689\n\
    \}\n")
}

appSettings = JSON.parse(jsonData);

console.log(appSettings.apikey);
