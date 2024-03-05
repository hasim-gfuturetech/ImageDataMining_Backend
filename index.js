const express = require('express')
const cors = require('cors')
const { connectToDB } = require("./db");
const { ImageDataModel } = require('./model/ImageDataModel');

require('dotenv').config()

const app = express();
app.use(cors());
app.use(express.json());


app.get("/", async (req, res) => {
    try {
        let data = await ImageDataModel.find();
        res.status(200).json({ "message": "All the Image data", data: data, issue: true })

    } catch (error) {
        res.status(200).json({ "message": error.message, issue: true })
    }
})

app.listen(8080, async () => {
    try {
        await connectToDB;
        console.log("server is running on 8080...");
    } catch (err) {
        console.error(err.message);
    }
});