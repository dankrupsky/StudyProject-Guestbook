const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const articleSchema = Schema({

    name:{
        type: String,
        required: true,
    },

    text:{
        type: String,
        required: true,
    },

    date:{
        type: Date,
        default: Date.now(),
    },

    ip: {
        type: String,
        required: true,
    },
});

module.exports = Article = mongoose.model("Comment", articleSchema);
