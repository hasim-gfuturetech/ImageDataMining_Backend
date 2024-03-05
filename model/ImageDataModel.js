
const mongoose = require('mongoose');

const ImageDataSchema = mongoose.Schema({
    DateTime: String,
    Message: String,
    Company: String
})

const ImageDataModel = mongoose.model("ImageData", ImageDataSchema);

module.exports = {
    ImageDataModel
}