import { Request } from "express";

export interface ICreateUserRequest extends Request{
    name: string,
    lastname: string,
    lastname2: string,
    email: string,
    phone: string
}