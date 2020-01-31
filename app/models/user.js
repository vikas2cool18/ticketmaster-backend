const mongoose= require('mongoose')
const Schema=mongoose.Schema

// create a schema for User
const userSchema=new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match:[
            /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
            'please use a valid email address'
        ]
    },
    password: {
        type: String,
        required: true,
        minlength: [8, 'password cannot be less than 8 characters'],
        maxlength: [128, 'password cannot be more than 128 characters']
    }
})

//create a model called as User

const User=mongoose.model('User', userSchema)

module.exports=User