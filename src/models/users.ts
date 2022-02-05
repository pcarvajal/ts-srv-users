import { Schema, Document, model } from "mongoose";

export interface IUser extends Document {
    name: string,
    lastname: string,
    lastname2: string,
    email: string,
    phone: string
}

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

export default model<IUser>("User", userSchema);