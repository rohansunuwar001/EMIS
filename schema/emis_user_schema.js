const { default: mongoose } = require("mongoose");

const emis_user_schema = new mongoose.Schema({
    fullname:{
        type:String,
        required:[true,"Please enter your fullname"]
    }
})