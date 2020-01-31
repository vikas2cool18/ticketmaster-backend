const mongoose=require('mongoose')
const colors=require('colors')

const setupDB=()=> {
    mongoose.connect('mongodb://localhost:27017/oct-weekend-ticketmaster-app', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=> {
        console.log('connected to DB'.cyan.underline.bold)
    })
    .catch((error)=> {
        console.log(error)
    })
}

module.exports=setupDB