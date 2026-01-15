import { config } from "dotenv";
config();

const serverConfig = {
  data_base: {
    db_uri: process.env.DB_URI,
  },
  server: {
    port: process.env.PORT,
  },
  bot_config: {
    bot_token: process.env.BOT_TOKEN,
  },
  client_reg_states: {
    none: "none",
    choosing_language: "choosing_language",
    entering_full_name: "entering_full_name",
    entering_phone_number: "entering_phone_number",
    edit_name: "edit_name",
    edit_phone: "edit_phone",
    editing_language: "editing_language",
    successfull: "successfull",
  },
};

export default serverConfig;
