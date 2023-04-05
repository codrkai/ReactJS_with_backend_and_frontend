const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {type:String},
    email: {type:String},
    website: {type:String},
    entryDate: {type:Date, default:Date.now}
})

const contactSchema = new Schema({
    email: {type:String, required:true},
    website: {type:String, required:true},
    message: {type:String, required:true},
    entryDate: {type:Date, default:Date.now}
})

const Users = mongoose.model('Users', userSchema, 'users')
const Contact = mongoose.model('Contact', contactSchema, 'contact_form')
const mySchemas = {'Users':Users, 'Contact':Contact}

module.exports = mySchemas