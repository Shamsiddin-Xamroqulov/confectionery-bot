import serverConfig from "../../config.js";
import { adminHandler } from "./admin.handler.js";
const {bot_config: {admin_id}} = serverConfig;

const startHandler = async (msg, chatId) => {
    const username = `ConfectUzBot`;
    if(chatId == admin_id) {
        return adminHandler(msg, username);
    }else {
        return clientHandler(msg, username);
    }
};

export default startHandler;