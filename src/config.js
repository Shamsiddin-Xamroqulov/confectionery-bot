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
    client_reg_states: {
        none: "none",
        entering_full_name: "entering_full_name",
        entering_contact: "entering_contact",
        edit_name: "edit_name",
        edit_phone: "edit_phone",
        successfull: "successfull"
    },
};

export default serverConfig;