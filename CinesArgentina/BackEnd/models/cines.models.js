const mongoose = require('mongoose');
const { Schema } = mongoose;

const cinesSchema = new Schema({
    espacio_cultural_id:            {type: Number, require: true},
    provincia_id:                   {type: Number, require: true},
    localidad_id:                   {type: Number, require: true},
    provincia:                      {type: String, require: true},
    localidad:                      {type: String, require: true},
    nombre:                         {type: String, require: true},
    direccion_descripcion:          {type: String, require: true},
    piso:                           {type: String, require: true},
    codigo_postal:                  {type: Number, require: true},
    codigo_indicativo_telefono:     {type: String, require: true},
    telefono:                       {type: String, require: true},
    mail:                           {type: String, require: true},
    web:                            {type: String, require: true},
    latitud:                        {type: Number, require: true},
    longitud:                       {type: Number, require: true},
    fuente:                         {type: String, require: true},
    pantallas:                      {type: Number, require: true},
    butacas:                        {type: Number, require: true},
    gestion:                        {type: String, require: true},
    espacio_cinear:                 {type: String, require: true}
});

module.exports = mongoose.model('cines',cinesSchema );
