const express = require('express')
const colors = require('colors')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

app.use(cors())
app.use(express.json())

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://1234:1234@cluster0.kuxzo.mongodb.net/notezzzDB?retryWrites=true&w=majority', {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.error(`Error: ${error.message}`.red.underline.bold)
        process.exit(1)
    }
}

connectDB()

app.use('/', require('./routes/noteRoute'))

app.listen(3001, () => {
    console.log('express server is on 3001')
})