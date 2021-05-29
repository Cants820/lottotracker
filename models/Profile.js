const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    username: { type: String },
    first_name: { type: String },
    last_name: { type: String },
    dob: { type: String },
    avatar: {type: String},
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}, {timestamps: true});

const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;
