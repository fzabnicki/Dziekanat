import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Semester } from '../shared/semester';
import { Teacher } from '../shared/teacher';
import { Title } from '../shared/title';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})
export class GradesComponent implements OnInit {

  displayedColumns: string[] = ['lesson', 'teacher', 'grade'];
  teachers: Teacher[] = [
    { id: 1, title: Title.DOKTORHABILITOWANY, name: "Jan", surname: "Kowalski", email: "jan.kowalski@edu.pl", phoneNumber: "+48 553-771-264" },
    { id: 2, title: Title.DOKTOR, name: "Tomasz", surname: "Zaradny", email: "tomasz.zaradny@edu.pl", phoneNumber: "+48 212 238 506" },
    { id: 3, title: Title.INŻYNIER, name: "Joanna", surname: "Sroka", email: "joanna.sroka@edu.pl", phoneNumber: "+48 212 255 022" },
    { id: 4, title: Title.MAGISTER, name: "Katarzyna", surname: "Mazur", email: "katarzyna.mazur@edu.pl", phoneNumber: "+48 572 295 964" },
    { id: 5, title: Title.MAGISTER, name: "Dorota", surname: "Ślusarz", email: "dorota.slusarz@edu.pl", phoneNumber: "+48 211 348 460" },
    { id: 6, title: Title.MAGISTERINŻYNIER, name: "Szymon", surname: "Zatarczy", email: "szymon.zatarczy@edu.pl", phoneNumber: "+48 455 762 054" },
    { id: 7, title: Title.DOKTORHABILITOWANY, name: "Dawid", surname: "Nowak", email: "dawid.nowak@edu.pl", phoneNumber: "+48 579 017 816" }
  ]
  grades: Semester[] = [
    {
      id: 1, semester: "I", classes: [
        { class: { name: "Zarządzanie w biznesie", teacher: this.teachers[1] }, grade: 5 },
        { class: { name: "Informatyka Stosowana", teacher: this.teachers[2] }, grade: 4 },
        { class: { name: "Zarządzanie projektami IT", teacher: this.teachers[0] }, grade: 4 },
        { class: { name: "Język Angielski", teacher: this.teachers[3] }, grade: 3 },
        { class: { name: "Programowanie", teacher: this.teachers[2] }, grade: 5 },
        { class: { name: "Podstawy baz danych", teacher: this.teachers[5] }, grade: 4 },
        { class: { name: "Ekonometria", teacher: this.teachers[6] }, grade: 5 },
      ]
    },
    {
      id: 2, semester: "II", classes: [
        { class: { name: "Matematyka Dyskretna", teacher: this.teachers[3] }, grade: 3 },
        { class: { name: "Zarządzanie zasobami ludzkimi", teacher: this.teachers[4] }, grade: 3 },
        { class: { name: "Podstawy struktur stron internetowych", teacher: this.teachers[0] }, grade: 4 },
        { class: { name: "Język angielski", teacher: this.teachers[3] }, grade: 3 },
        { class: { name: "Programowanie w ReactJS", teacher: this.teachers[4] }, grade: 5 },
        { class: { name: "Zarządzanie bazami danych", teacher: this.teachers[6] }, grade: 5 },
        { class: { name: "Ekonometria stosowana", teacher: this.teachers[1] }, grade: 4 },
      ]
    },
    {
      id: 3, semester: "III", classes: [
        { class: { name: "Informatyka stosowana", teacher: this.teachers[2] }, grade: 5 },
        { class: { name: "Psychologia w biznesie", teacher: this.teachers[3] }, grade: 4 },
        { class: { name: "Język angielski", teacher: this.teachers[2] }, grade: 3.5 },
        { class: { name: "Programowanie w JS", teacher: this.teachers[4] }, grade: 3 },
        { class: { name: "Podstawy sieci", teacher: this.teachers[4] }, grade: 4.5 },
        { class: { name: "Matematyka stosowana", teacher: this.teachers[1] }, grade: 5 },
      ]
    },
    {
      id: 4, semester: "IV", classes: [
        { class: { name: "Matematyka finansowa i ubezpieczeniowa", teacher: this.teachers[6] }, grade: 5 },
        { class: { name: "Programowanie w środowisku ASP.NET", teacher: this.teachers[4] }, grade: 3.5 },
        { class: { name: "Testy i kontrola jakości oprogramowania", teacher: this.teachers[1] }, grade: 4.5 },
        { class: { name: "Język angielski", teacher: this.teachers[4] }, grade: 3 },
        { class: { name: "Autoprezentacja i efektywność osobista", teacher: this.teachers[1] }, grade: 4 },
        { class: { name: "Warsztaty przedsiębiorczości", teacher: this.teachers[3] }, grade: 3 },
        { class: { name: "Frameworki front-endowe", teacher: this.teachers[5] }, grade: 4.5 },
        { class: { name: "Programowanie aplikacji webowych", teacher: this.teachers[2] }, grade: 3 },
      ]
    },
    {
      id: 5, semester: "V", classes: [
        { class: { name: "Marketing cyfrowy", teacher: this.teachers[4] }, grade: 3.5 },
        { class: { name: "Projekt inżynierski (P1)", teacher: this.teachers[6] }, grade: 4 },
        { class: { name: "Język łaciński w biznesie", teacher: this.teachers[2] }, grade: 3 },
        { class: { name: "Język angielski", teacher: this.teachers[4] }, grade: 5 },
        { class: { name: "Praca w zespole międzynarodowym", teacher: this.teachers[0] }, grade: 4.5 },
        { class: { name: "Zaawansowana obsługa baz danych", teacher: this.teachers[1] }, grade: 4 },
      ]
    },
    {
      id: 6, semester: "VI", classes: [
        { class: { name: "Projekt inżynierski (P2)", teacher: this.teachers[4] }, grade: 3 },
        { class: { name: "Język angielski", teacher: this.teachers[1] }, grade: 3 },
        { class: { name: "Rysowanie w CAD", teacher: this.teachers[0] }, grade: 3.5 },
        { class: { name: "Wzorce projektowe", teacher: this.teachers[6] }, grade: 3 },
        { class: { name: "Budowa aplikacji mobilnych", teacher: this.teachers[1] }, grade: 5 },
      ]
    },
    {
      id: 7, semester: "VII", classes: [
        { class: { name: "Praktyki zawodowe", teacher: this.teachers[4] }, grade: 4 },
        { class: { name: "Projekt inżynierski (P3)", teacher: this.teachers[3] }, grade: 4.5 },
        { class: { name: "Język angielski", teacher: this.teachers[5] }, grade: undefined },
      ]
    },
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(teacherID: number){
    const teacher = this.teachers.find(teacher => teacher.id === teacherID);
    this.dialog.open(DialogComponent,{
      data: teacher
    })
  }

}
