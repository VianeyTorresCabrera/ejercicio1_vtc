const express = require('express');

//Routers
const {registrationRouter} = require('./routes/registrations.routes');


const app = express();
app.use(express.json());


//define endpoints

app.use('/api/v1/registration', registrationRouter);

module.exports = { app };



