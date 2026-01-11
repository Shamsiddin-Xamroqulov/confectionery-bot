import {config} from "dotenv";
config();

const serverConfig = {
    data_base: {
        db_uri: process.env.DB_URI
    },
    server: {
        port: process.env.PORT
    },
};

export default serverConfig;