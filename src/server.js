import path from "path";
import express from "express";
import serverConfig from "./config.js";
import dbConnection from "./lib/connection/db.connection.js";
const {server: {port}} = serverConfig;

dbConnection().catch(err => {
    console.log(err.message);
    process.exit(1);
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => console.log(`Server is runinng on http://127.0.0.1:${port}`));