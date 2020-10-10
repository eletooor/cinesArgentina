const mongoose = require('mongoose');
const { Schema } = mongoose;

const cinesSchema = new Schema({
    name: {type: String, required: true },
    position: { type: String, required: true}
});

module.exports = mongoose.model('cines',cinesSchema );
