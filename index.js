const express=require('express')
const routes=require('./config/routes')
const setupDB=require('./config/database')
const morgan=require('morgan')
const colors=require('colors')
const app=express()
const PORT=3033

app.use(morgan('dev'))

//express to read JSON Data
app.use(express.json())
app.use('/', routes)

//connect to DB
setupDB()

app.get('/', (req, res) => {
    res.json({ text: 'welcome to the website'})
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`.yellow.bold)
})