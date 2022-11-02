import { MatTableDataSource } from "@angular/material/table";
import { Lesson } from "./lesson";

export interface LessonDays{
    date: Date,
    lessons?: Lesson[] | MatTableDataSource<Lesson>
}