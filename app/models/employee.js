const mongoose=require('mongoose')
const Schema=mongoose.Schema

const employeeSchema= new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
        'please use a valid email address']
    },
    mobile: {
        type: Number,
        required: true,
        maxlength:[10, 'Mobile numbers cannot be more than 10 characters']
    },
    department: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Department'
    }
})

const Employee=mongoose.model('Employee', employeeSchema)

module.exports=Employee