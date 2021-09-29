//Imports
const fs = require('fs');
const forcast = require('./utils/forcast')

//load .env enviroment variables
require('dotenv').config();

//Constants
const mtlCoords="45.5017,-73.5673";

if(process.env.API_KEY){
  //get our forcast data from the weatherstack api
  forcast(mtlCoords, process.env.API_KEY, (error, data) => {
    console.log('Error',error)
    console.log('data',data)
  })
}
else{
  console.error(`\FATAL ERROR: Failed to find the API_KEY in our .env file  please create it with the following format and store your weatherstack.com api key\n\
    #${process.cwd()}\\.env\n\
    API_KEY=12345676890`)
}
