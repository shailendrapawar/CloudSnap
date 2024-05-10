const mongoose = require('mongoose');

const UserDataSchema = new mongoose.Schema({
    owner: {
        type: String,
        required: true
    },
    imageName: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    category: {
        type: String,
        default: "none"
    },
    publicId: {
        type: String,
        default: ""
    }

}, { timestamps: true })

const UserDataModel = mongoose.model("UserDataModel", UserDataSchema);

module.exports = UserDataModel;