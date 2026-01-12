import bot from "./bot.js";
import startHandler from "./handler/start.handler.js";

bot.on("message", async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;

    if(text == "/start") return startHandler(msg, chatId);
});