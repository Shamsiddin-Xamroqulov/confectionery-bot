import serverConfig from "../../config.js";
import { adminLanguageHandler } from "./admin.handler.js";
import { clientLanguageHandler } from "./client.handler.js";
const {bot_config: {admin_id}} = serverConfig;

const startHandler = async (msg, chatId) => {
    if(chatId == admin_id) {
        return adminLanguageHandler(msg);
    }else {
        return clientLanguageHandler(msg);
    }
};

export default startHandler;