import { Schema, model } from "mongoose";

import { IUserEntiy } from "../entities/IUserEntity";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    lastname2: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true
    },
    phone:{
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true
    }
});

export default model<IUserEntiy>("User", userSchema);