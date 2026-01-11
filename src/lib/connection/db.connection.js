import mongoose from "mongoose";
import serverConfig from "../../config.js";
const {data_base: {db_uri}} = serverConfig;

async function dbConnection () {
    await mongoose.connect(db_uri);
    console.log("Db successfully connection");
};

export default dbConnection;