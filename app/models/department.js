const mongoose = require('mongoose')
const Schema=mongoose.Schema

const departmentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    }
})

const Department=mongoose.model('Department', departmentSchema)

module.exports=Department