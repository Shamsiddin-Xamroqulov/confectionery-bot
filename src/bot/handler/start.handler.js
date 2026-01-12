import serverConfig from "../../config.js";
import { adminHandler } from "./admin.handler.js";
import { clientHandler } from "./client.handler.js";
const {bot_config: {admin_id}} = serverConfig;

const startHandler = async (msg, chatId) => {
    if(chatId == admin_id) {
        return adminHandler(msg);
    }else {
        return clientHandler(msg);
    }
};

export default startHandler;