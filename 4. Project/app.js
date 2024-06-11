const express = require('express')
const mongoose = require('mongoose')
const categories = require('./Routes/categories')
const app = express()

mongoose.connect('mongodb://127.0.0.1/learningPlatform').then(()=> console.log('Connection is successful to learning platform database')).catch(err => console.error('Couldnt connect to mongoDB', err))

app.use(express.json());
app.use(categories)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));


