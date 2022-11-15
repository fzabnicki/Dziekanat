import { Teacher } from "./teacher";

export interface Class{
    id?: number,
    name: string;
    teacher: Teacher;
}