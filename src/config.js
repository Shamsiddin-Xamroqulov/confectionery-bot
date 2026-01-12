import {config} from "dotenv";
config();

const serverConfig = {
    data_base: {
        db_uri: process.env.DB_URI
    },
    server: {
        port: process.env.PORT
    },
    bot_config: {
        bot_token: process.env.BOT_TOKEN,
        admin_id: process.env.ADMIN_ID
    },
};

export default serverConfig;