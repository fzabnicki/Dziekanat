import { Component, OnInit } from '@angular/core';
import { Lesson } from '../shared/lesson';
import { Teacher } from '../shared/teacher';
import { Title } from '../shared/title';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  teachers: Teacher[] = [
    { id: 1, title: Title.DOKTORHABILITOWANY, name: "Jan", surname: "Kowalski", email: "jan.kowalski@edu.pl", phoneNumber: "+48 553-771-264" },
  ];


  lessonsData?: Lesson[] = [
    { startDate: new Date(2022, 11, 3, 9), endDate: new Date(2022, 11, 3, 10, 30), name: "Zarządzanie", place: "Sala nr.35", teacher: this.teachers[1] },
    { startDate: new Date(2022, 11, 3, 10, 45), endDate: new Date(2022, 11, 3, 12, 15), name: "Język angielski", place: "Sala nr.12", teacher: this.teachers[1] },
    { startDate: new Date(2022, 11, 3, 12, 30), endDate: new Date(2022, 11, 3, 14), name: "Programowanie w środowisku ASP.NET", place: "Sala nr.65", teacher: this.teachers[1] },
    { startDate: new Date(2022, 11, 3, 14, 15), endDate: new Date(2022, 11, 3, 15, 45), name: "Matematyka dyskretna", place: "Sala nr.65", teacher: this.teachers[1] },
    { startDate: new Date(2022, 11, 3, 16), endDate: new Date(2022, 11, 3, 17, 30), name: "Ekonometria", place: "Sala nr.65", teacher: this.teachers[1] }];

  constructor() { }

  ngOnInit(): void {
    //this.lessonsData = undefined;
  }

}
