const mongoose = require('mongoose');
require('dotenv').config()

const url = process.env.URL_MONGODB;
const dbName = process.env.DB_NAME;

async function connect() {
    try {
        await mongoose.connect(url, {dbName: dbName});
        console.log("Connected successfully to database");
    } catch {
        console.log("Connect fail!");
    }
}

module.exports = {connect};