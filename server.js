const { app } = require('./app');

const { db } = require('./utils/database.util');

//connect to database
db.authenticate()
.then( () => console.log('DB authenticade'))
.catch( err => console.log(err));

db.sync()
.then( () => console.log('DB sync'))
.catch( err => console.log(err));


app.listen(4001,()=>{
    console.log('express are running!');
});