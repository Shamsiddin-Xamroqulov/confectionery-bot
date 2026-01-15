import {Schema, model} from "mongoose";

const AdminModel = new Schema({
    user_id: {
        type: Number,
        unique: true
    },
    username: {
        type: String,
        unique: true
    },
    phone_number: {
        type: String,
        unique: true
    },
    language: {
        type: String,
        enum: ["ru", "uz"]
    },
    status: {
        type: String,
        enum: ["client", "admin"],
        default: "admin"
    },
}, {
    timestamps: true,
    versionKey: false
});

export default model("admins", AdminModel);