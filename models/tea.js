const mongoose = require("mongoose");

const Tea = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    theGoodStuff: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model("Tea", Tea);