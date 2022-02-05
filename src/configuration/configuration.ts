import dotenv from "dotenv";

dotenv.config();

export default {
    DB: {
        URI: process.env.MONGODB_URI || "mongodb://localhost/condo",
        USER: process.env.MONGODB_USER,
        PASSWORD: process.env.MONGODB_PASS
    }
}