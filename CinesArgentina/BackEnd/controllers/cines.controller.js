const cine = require('../models/cines.models');

const cineCtrl ={};
cineCtrl.getCines= async (req, res) => {
       const cines = await cine.find(); 
       res.json(cines);
    }

module.exports= cineCtrl;