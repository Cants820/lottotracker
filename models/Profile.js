const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    _id: { type: String },
    username: { type: String },
    first_name: { type: String },
    last_name: { type: String },
    dob: { type: String },
    avatar: {type: String},
    user_id: [Schema.Types.ObjectId]
}, {timestamps: true});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
