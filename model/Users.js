const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const DataVersion = "beta-0";
const UserSchema = new Schema({
    Username: {
        type: String,
        required: true,
    },
    UserId: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    PhoneNumer: {
        type: Number, // DevCanny Says: Do we even need this?
        required: true,
    },
    ProfilePicture: {
        type: String,
        required: true,
    },
    // DevCanny Says: Maybe...
    // QuizzesGiven: [
    //     {
    //         Id:{
    //             type: Number,
    //             required: true
    //         },
    //     }
    // ]
    // QuizzesCreated: [
    //     {
    //         Id:{
    //             type: Number,
    //             required: true
    //         },
    //     }
    // ]
});
module.exports = mongoose.model("UserData-"+DataVersion, UserSchema)