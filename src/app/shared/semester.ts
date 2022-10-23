import { ClassWithGrades } from "./classWithGrades";

export interface Semester{
    id: number;
    semester: string;
    classes: ClassWithGrades[]
}