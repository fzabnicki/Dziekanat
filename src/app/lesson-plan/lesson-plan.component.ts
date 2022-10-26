import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Lesson } from '../shared/lesson';
import { Teacher } from '../shared/teacher';
import { Title } from '../shared/title';

@Component({
  selector: 'app-lesson-plan',
  templateUrl: './lesson-plan.component.html',
  styleUrls: ['./lesson-plan.component.scss']
})
export class LessonPlanComponent implements OnInit {

  teachers: Teacher[] = [
    { id: 1, title: Title.DOKTORHABILITOWANY, name: "Jan", surname: "Kowalski", email: "jan.kowalski@edu.pl", phoneNumber: "+48 553-771-264" },
    { id: 2, title: Title.DOKTOR, name: "Tomasz", surname: "Zaradny", email: "tomasz.zaradny@edu.pl", phoneNumber: "+48 212 238 506" },
    { id: 3, title: Title.INŻYNIER, name: "Joanna", surname: "Sroka", email: "joanna.sroka@edu.pl", phoneNumber: "+48 212 255 022" },
    { id: 4, title: Title.MAGISTER, name: "Katarzyna", surname: "Mazur", email: "katarzyna.mazur@edu.pl", phoneNumber: "+48 572 295 964" }
  ];
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  displayedColumns: string[] = ['date', 'time', 'name'];

  days: Lesson[] = [
    { startDate: new Date(2022, 11, 3, 9), endDate: new Date(2022, 11, 3, 10, 30), name: "Zarządzanie", place: "Sala nr.35", teacher: this.teachers[1] },
    { startDate: new Date(2022, 11, 3, 10, 45), endDate: new Date(2022, 11, 3, 12, 15), name: "Język angielski", place: "Sala nr.12", teacher: this.teachers[1] },
    { startDate: new Date(2022, 11, 3, 12, 30), endDate: new Date(2022, 11, 3, 14), name: "Programowanie w środowisku ASP.NET", place: "Sala nr.65", teacher: this.teachers[1] },
    { startDate: new Date(2022, 11, 3, 14, 15), endDate: new Date(2022, 11, 3, 15, 45), name: "Matematyka dyskretna", place: "Sala nr.65", teacher: this.teachers[1] },
    { startDate: new Date(2022, 11, 3, 16), endDate: new Date(2022, 11, 3, 17, 30), name: "Ekonometria", place: "Sala nr.65", teacher: this.teachers[1] },
    { startDate: new Date(2022, 11, 4, 9), endDate: new Date(2022, 11, 4, 10, 30), name: "Zarządzanie projektami IT", place: "Sala nr.25", teacher: this.teachers[1] },
    { startDate: new Date(2022, 11, 4, 10, 45), endDate: new Date(2022, 11, 4, 12, 15), name: "Język angielski", place: "Sala nr.12", teacher: this.teachers[1] },
    { startDate: new Date(2022, 11, 5, 9), endDate: new Date(2022, 11, 5, 10, 30), name: "Zarządzanie w zespole międzynarodowym", place: "Sala nr.35", teacher: this.teachers[1] },
    { startDate: new Date(2022, 11, 5, 10, 45), endDate: new Date(2022, 11, 5, 12, 15), name: "Język angielski", place: "Sala nr.12", teacher: this.teachers[1] },
    { startDate: new Date(2022, 11, 5, 12, 30), endDate: new Date(2022, 11, 5, 14), name: "Programowanie w JS", place: "Sala nr.65", teacher: this.teachers[1] },
    { startDate: new Date(2022, 11, 6, 12, 30), endDate: new Date(2022, 11, 6, 14), name: "Ekonometria", place: "Sala nr.23", teacher: this.teachers[1] },
    { startDate: new Date(2022, 11, 6, 12, 30), endDate: new Date(2022, 11, 6, 14), name: "Zarządzanie czasem pracy", place: "Sala nr.14", teacher: this.teachers[1] },
    { startDate: new Date(2022, 11, 6, 12, 30), endDate: new Date(2022, 11, 6, 14), name: "Programowanie React", place: "Sala nr.34", teacher: this.teachers[1] },
    { startDate: new Date(2022, 11, 6, 12, 30), endDate: new Date(2022, 11, 6, 14), name: "Programowanie React", place: "Sala nr.34", teacher: this.teachers[1] },
    { startDate: new Date(2022, 11, 6, 12, 30), endDate: new Date(2022, 11, 6, 14), name: "Programowanie React", place: "Sala nr.34", teacher: this.teachers[1] },
    { startDate: new Date(2022, 11, 6, 12, 30), endDate: new Date(2022, 11, 6, 14), name: "Programowanie React", place: "Sala nr.34", teacher: this.teachers[1] },
    { startDate: new Date(2022, 11, 6, 12, 30), endDate: new Date(2022, 11, 6, 14), name: "Programowanie React", place: "Sala nr.34", teacher: this.teachers[1] },
    { startDate: new Date(2022, 11, 6, 12, 30), endDate: new Date(2022, 11, 6, 14), name: "Programowanie React", place: "Sala nr.34", teacher: this.teachers[1] },
    { startDate: new Date(2022, 11, 6, 12, 30), endDate: new Date(2022, 11, 6, 14), name: "Programowanie React", place: "Sala nr.34", teacher: this.teachers[1] },
    { startDate: new Date(2022, 11, 6, 12, 30), endDate: new Date(2022, 11, 6, 14), name: "Programowanie React", place: "Sala nr.34", teacher: this.teachers[1] }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  sortByDate(value: any) {
    console.log(value);
  }

  resetSort() {

  }

}
