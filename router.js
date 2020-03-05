const bodyParser = require('body-parser')
const express = require('express')
const get = require('./api_data')
const cors = require('cors')
const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/say_hello', get.get)
module.exports = app;