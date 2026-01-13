import {Schema, model} from "mongoose";
import serverConfig from "../config.js";
const {client_reg_states} = serverConfig;

const ClientModel = new Schema({
    chat_id: {
        type: Number,
        unique: true
    },
    full_name: {
        type: String,
    },
    username: {
        type: String,
        unique: true
    },
    contact: {
        type: Object
    },
    status: {
        type: String,
        enum: ["client", "admin"],
        default: "client"
    },
    step: {
        type: String,
        default: client_reg_states.none
    },
}, {
    timestamps: true,
    versionKey: false
});

export default model("clients", ClientModel);