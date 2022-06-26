const express = require('express');

//controllers
const { getAllRegistrations, 
        createRegistration, 
        getRegistrationById, 
        updateRegistration, 
        deleteRegistration  } = require('../controllers/registration.controller');


const registrationRouter = express.Router();

//define endpoints
registrationRouter.get('/', getAllRegistrations);

registrationRouter.post('/', createRegistration);

registrationRouter.get('/:id',getRegistrationById);

registrationRouter.patch('/:id',updateRegistration);

registrationRouter.put('/:id',deleteRegistration);



module.exports = { registrationRouter };