import { Document } from "mongoose";

export interface IUserModel extends Document {
    name: string,
    lastname: string,
    lastname2: string,
    email: string,
    phone: string
}