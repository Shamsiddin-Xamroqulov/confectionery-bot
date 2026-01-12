import TelegramBot from "node-telegram-bot-api";
import serverConfig from "../config.js";
const {bot_config: {bot_token}} = serverConfig;

const bot = new TelegramBot(bot_token, {polling: true});

export default bot;

import("./message.js");
import("./query.js");