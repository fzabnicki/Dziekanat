import { Group } from "./group";
import { StudentPersonalInformations } from "./studentsPersonalInformations";

export interface User{
    id: string,
    email: string,
    password: string,
    groups: Group[],
    personalInformations: StudentPersonalInformations
}