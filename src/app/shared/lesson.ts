import { Teacher } from "./teacher"

export interface Lesson {
    startDate: Date,
    endDate: Date,
    name: string
    teacher: Teacher,
    place: string
}