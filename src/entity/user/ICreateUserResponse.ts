import { Response } from "express";

import { GenericResponse } from "../common/Response";
import { IUser } from "./IUser";

export interface ICreateUserResponse extends Response ,GenericResponse<IUser>{

}