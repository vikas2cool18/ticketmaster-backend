const mongoose=require('mongoose')
const Schema=mongoose.Schema

const customerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type:String,
        required: true,
        match:[/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
        'please use a valid email address']
    },
    mobile: {
        type: Number,
        required: true,
        maxlength:[10, 'Mobile numbers cannot be more than 10 characters']
    },
    createdAt : {
        type: Date,
        required: true,
        default: Date.now()
    }
})

const Customer=mongoose.model('Customer', customerSchema)

module.exports=Customer