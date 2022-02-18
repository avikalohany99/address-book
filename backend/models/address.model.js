const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const addressSchema = new Schema({
    username: {type: String,required: true},
    firstname: {type: String,required: true},
    lastname: {type: String,required: true},
    email: {type: String,required: true},
    phonenumber: {type: Number,required: true},
}, {
    timestamps: true, 
});

const Address = mongoose.model('Address', addressSchema);

module.exports = Address;