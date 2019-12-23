const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({

    //For initial testing---
    name:String,
    email:String

});
module.exports = mongoose.model('User', user);