import { IUser } from "./user";

export interface IAuthFormData extends Pick<IUser, "email" | "password"> {}
