const express = require('express');

//Routers
const {registrationRouter} = require('./routes/registrations.routes');

//utils
const { db } = require('./utils/database.util');


const app = express();
app.use(express.json());


//define endpoints

app.use('/registration', registrationRouter);


//connect to database
db.authenticate()
.then( () => console.log('DB authenticade'))
.catch( err => console.log(err));

db.sync()
.then( () => console.log('DB sync'))
.catch( err => console.log(err));

app.use('/registration', registrationRouter);

app.listen(4001,()=>{
    console.log('express are running!');
});


