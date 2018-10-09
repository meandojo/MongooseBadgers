const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose_demo', {useNewUrlParser:true},(errs)=>errs?console.log(errs):console.log('connection to db is fantabulous'));

const BadgerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:[3,"names should be 3 characters"]
    },
    color:{
        type:String,
        required:true,
    },
    favorite_snack:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model('Badger', BadgerSchema)
