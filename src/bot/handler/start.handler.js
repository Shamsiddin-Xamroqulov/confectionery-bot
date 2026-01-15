import AdminModel from "../../model/Admin.model.js";
import { adminLanguageHandler } from "./admin.handler.js";
import { clientLanguageHandler } from "./client.handler.js";

const startHandler = async (msg, chatId) => {
    const findAdmin = await AdminModel.findOne({user_id: chatId});
    if(findAdmin && findAdmin.status == "admin") {
        return adminLanguageHandler(msg, chatId);
    }else {
        return clientLanguageHandler(msg, chatId);
    };
};

export default startHandler;