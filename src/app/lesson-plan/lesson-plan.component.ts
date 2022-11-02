import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectorRef, Component, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Lesson } from '../shared/lesson';
import { LessonDays } from '../shared/lessondays';
import { Teacher } from '../shared/teacher';
import { Title } from '../shared/title';

@Component({
  selector: 'app-lesson-plan',
  templateUrl: './lesson-plan.component.html',
  styleUrls: ['./lesson-plan.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class LessonPlanComponent implements OnInit {
  @Input() smallFormat: boolean = false;
  @Input() day: Lesson[] = [];

  @ViewChild('outerSort', { static: true }) sort!: MatSort;
  @ViewChildren('innerSort') innerSort!: QueryList<MatSort>;
  @ViewChildren('innerTables') innerTables!: QueryList<MatTable<Lesson>>;

  dataSource: MatTableDataSource<LessonDays> | undefined;
  lessonsData: LessonDays[] = [];
  displayedColumns: string[] = ['date'];
  innerDisplayedColumns: string[] = ['time', 'name', 'teacher', 'place'];
  expandedElement: LessonDays | null = null;


  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  displayedSmall: string[] = ['time', 'name'];

  constructor(
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    DAYS.forEach(day => {
      if (day.lessons && Array.isArray(day.lessons) && day.lessons.length)
        this.lessonsData = [...this.lessonsData, { ...day, lessons: new MatTableDataSource(day.lessons) }];
    })
    this.dataSource = new MatTableDataSource<LessonDays>(this.lessonsData);
    this.dataSource.sort = this.sort;
  }

  toggleRow(element: LessonDays) {
    element.lessons && (element.lessons as MatTableDataSource<Lesson>).data.length ? (this.expandedElement = this.expandedElement == element ? null : element) : null;
    this.cd.detectChanges();
    this.innerTables.forEach((table, index) => ((table.dataSource as MatTableDataSource<Lesson>).sort = this.innerSort.toArray()[index]));
    console.log(this.innerTables);
    console.log(this.expandedElement);
  }

  applyFilter(filterValue: string) {
    this.innerTables!.forEach((table, index) => (table.dataSource as MatTableDataSource<Lesson>).filter = filterValue.trim().toLowerCase());
  }

}

const TEACHERS: Teacher[] = [
  { id: 1, title: Title.DOKTORHABILITOWANY, name: "Jan", surname: "Kowalski", email: "jan.kowalski@edu.pl", phoneNumber: "+48 553-771-264" },
  { id: 2, title: Title.DOKTOR, name: "Tomasz", surname: "Zaradny", email: "tomasz.zaradny@edu.pl", phoneNumber: "+48 212 238 506" },
  { id: 3, title: Title.INŻYNIER, name: "Joanna", surname: "Sroka", email: "joanna.sroka@edu.pl", phoneNumber: "+48 212 255 022" },
  { id: 4, title: Title.MAGISTER, name: "Katarzyna", surname: "Mazur", email: "katarzyna.mazur@edu.pl", phoneNumber: "+48 572 295 964" }
];

const DAYS: LessonDays[] = [{
  date: new Date(2022, 11, 3), lessons: [
    { startDate: new Date(2022, 11, 3, 9), endDate: new Date(2022, 11, 3, 10, 30), name: "Zarządzanie", place: "Sala nr.35", teacher: TEACHERS[1] },
    { startDate: new Date(2022, 11, 3, 10, 45), endDate: new Date(2022, 11, 3, 12, 15), name: "Język angielski", place: "Sala nr.12", teacher: TEACHERS[1] },
    { startDate: new Date(2022, 11, 3, 12, 30), endDate: new Date(2022, 11, 3, 14), name: "Programowanie w środowisku ASP.NET", place: "Sala nr.65", teacher: TEACHERS[1] },
    { startDate: new Date(2022, 11, 3, 14, 15), endDate: new Date(2022, 11, 3, 15, 45), name: "Matematyka dyskretna", place: "Sala nr.65", teacher: TEACHERS[1] },
    { startDate: new Date(2022, 11, 3, 16), endDate: new Date(2022, 11, 3, 17, 30), name: "Ekonometria", place: "Sala nr.65", teacher: TEACHERS[1] },
  ]
},
{
  date: new Date(2022, 11, 4), lessons: [
    { startDate: new Date(2022, 11, 4, 9), endDate: new Date(2022, 11, 4, 10, 30), name: "Zarządzanie projektami IT", place: "Sala nr.25", teacher: TEACHERS[1] },
    { startDate: new Date(2022, 11, 4, 10, 45), endDate: new Date(2022, 11, 4, 12, 15), name: "Język angielski", place: "Sala nr.12", teacher: TEACHERS[1] },
  ]
},
{
  date: new Date(2022, 11, 5), lessons: [

    { startDate: new Date(2022, 11, 5, 9), endDate: new Date(2022, 11, 5, 10, 30), name: "Zarządzanie w zespole międzynarodowym", place: "Sala nr.35", teacher: TEACHERS[1] },
    { startDate: new Date(2022, 11, 5, 10, 45), endDate: new Date(2022, 11, 5, 12, 15), name: "Język angielski", place: "Sala nr.12", teacher: TEACHERS[1] },
    { startDate: new Date(2022, 11, 5, 12, 30), endDate: new Date(2022, 11, 5, 14), name: "Programowanie w JS", place: "Sala nr.65", teacher: TEACHERS[1] },
  ]
},
{
  date: new Date(2022, 11, 6), lessons: [
    { startDate: new Date(2022, 11, 6, 12, 30), endDate: new Date(2022, 11, 6, 14), name: "Ekonometria", place: "Sala nr.23", teacher: TEACHERS[1] },
    { startDate: new Date(2022, 11, 6, 12, 30), endDate: new Date(2022, 11, 6, 14), name: "Zarządzanie czasem pracy", place: "Sala nr.14", teacher: TEACHERS[1] },
    { startDate: new Date(2022, 11, 6, 12, 30), endDate: new Date(2022, 11, 6, 14), name: "Programowanie React", place: "Sala nr.34", teacher: TEACHERS[1] }]
}
];