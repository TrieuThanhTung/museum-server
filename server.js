const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
require('dotenv').config()

const port = process.env.PORT || 3000

app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(cors())
const route = require('./routes')
const db = require('./database/Mongo')

db.connect();
route(app)


app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})