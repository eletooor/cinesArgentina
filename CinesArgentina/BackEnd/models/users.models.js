const mongoose = require('mongoose');
const { Schema } = mongoose;

const usersSchema = new Schema({
    name: {type: String, required: true },
    password: { type: String, required: true}
});

module.exports = mongoose.model('users',usersSchema );
