const cine = require('../models/cines.models');

const cineCtrl ={};
cineCtrl.getCines= async (req, res) => {
       const cines = await cine.find(); 
       res.json(cines);
    }

cineCtrl.getCine= async (req, res) => {
    const cines = await cine.findById(req.params.id);
    res.json(cines);
}

cineCtrl.createCine= async (req, res) => {
    const cines = new cine(req.body);
    await cines.save();
    res.json({
        status: "Cine saved"
    });
}

/*///////////////CARGAR LA BASE DE DATOS
cineCtrl.rellenar=
    async function rellenar (valor) {
       const cines = new cine(valor);
       await cines.save();
       console.log("guardado");
}
////////////////*/

module.exports= cineCtrl;