import { Request } from "express";

export interface ICreateUserRequest{
    name: string,
    lastname: string,
    lastname2: string,
    email: string,
    phone: string
}