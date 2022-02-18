import { Schema, model } from "mongoose";

import { IUserModel } from "../models/IUserModel";

class UserSchema {
  static get schema() {
    const schema = new Schema({
      name: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
      },
      lastname: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
      },
      lastname2: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true,
      },
      phone: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true,
      },
    });

    return schema;
  }
}

var schema = model<IUserModel>("Users", UserSchema.schema);
export = schema;
