//models
const { Registration } = require('../models/registration.model');


const getAllRegistrations = async (req, res) => {
    try{
        const registration = await Registration.findAll();
        res.status(200).json({
            status: 'success',
            registration,
        })         
    }catch(err){
        console.log(err)
    }          
  
}

const createRegistration = async (req, res) => {
    try{
        const {entranceTime, exitTime}= req.body;
       const date = new Date();

    const newRegistration  = await Registration.create({
        entranceTime : `${date}`, 
        exitTime, 
        status: 'working'
    });  

    res.status(201).json({
        status: 'success',
        newRegistration,
    });

    }catch (err){
        console.log(err);
    }
   
};



const getRegistrationById = async (req,res) => {
   const { id } = req.params;

  const registration = await Registration.findOne({ where: { id } });

  if(!registration){
    res.status(404).json({
        status: 'error',
        message: 'Registration snot found'
    });
  }

  res.status(200).json({
    status: 'success',
    registration,
  })
}

const updateRegistration = async (req, res) => {
    const { id } = req.params;
    const { exitTime } = req.body;
    const registration = await Registration.findOne({ where: { id } });
    const date = new Date();

    //validation if registration exists
    if(!registration){
        res.status(404).json({
            status: 'error',
            message: 'Registration not found'
        });
    }

    await registration.update({ 
        exitTime : `${date}`,
        status : `out`
    });

    res.status(204).json({ status: 'success' });
}

const deleteRegistration = async (req, res) => {
    const { id } = req.params;  
    const { entranceTime, status } = req.body; 
    const registration = await Registration.findOne({ where: { id } });
    const date = new Date();

    //validation if registration exists
    if(!registration){
        res.status(404).json({
            status: 'error',
            message: 'Registration not found'
        });
    }
    
    //await registration.destroy();
    await registration.update({
        entranceTime: date,       
        status: 'cancelled'});
    res.status(204).json({ status : 'success'});
}

module.exports = { 
    getAllRegistrations, 
    createRegistration, 
    getRegistrationById,
    updateRegistration,
    deleteRegistration
 };