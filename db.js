const mongoose = require("mongoose");
require('dotenv').config();

const connectToDB = mongoose.connect(process.env.DATABASEURI);

module.exports = {
    connectToDB
}