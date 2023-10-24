const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
require('dotenv').config()

const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
const route = require('./routes')
const db = require('./database/Mongo')

db.connect();
route(app)


app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})