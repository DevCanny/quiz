const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const DataVersion = "beta-0";
const PostSchema = new Schema({
    QuizName: {
        type: String,
        required: true,
    },
    QuizId: {
        type: String,
        required: true,
    },
    IsPrivate: {
        type: Boolean,
        required: true,
    },
    Password: {
        type: String,
        required: true,
    },
    Creator: {
        type: String,
        required: true,
    },
    CreatedDate: {
        type: String,
        required: true,
    },
    QuizPicture: {
        type: String,
        required: true,
    },
    // DevCanny Says: Let's do this later
    Questions: [
        {
            Id:{
                type: Number,
                required: true
            },
        }
    ],
});
module.exports = mongoose.model("UserData-"+DataVersion, UserSchema)