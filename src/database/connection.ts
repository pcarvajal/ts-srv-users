import mongoose from "mongoose";

import config from "../configuration/index";


mongoose.connect(config.DB.URI);

const connection = mongoose.connection;

connection.once("open", () => {
    console.info("Database connection stablished");
});

connection.on("error", error => {
    console.error(error);
    process.exit(0);
});