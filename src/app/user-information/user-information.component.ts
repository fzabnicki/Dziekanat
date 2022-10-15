import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss']
})
export class UserInformationComponent implements OnInit {

  displayedColumns: string[] = ['key', 'value'];
  dataSource = [
    {id: 1, key: 'Imie', value: 'Jan'},
    {id: 2, key: 'Nazwisko', value: 'Zaradny'},
    {id: 3, key: 'E-mail', value: 'jan_zaradny@zdamy.to.com'},
    {id: 4, key: 'PESEL', value: '95050555443'},
    {id: 5, key: 'Data urodzenia', value: '1995-05-05'},
    {id: 6, key: 'Obyywatelstwo', value: 'Polskie'},
    {id: 7, key: 'Imię Ojca', value: 'Andrzej'},
    {id: 8, key: 'Imię Matki', value: 'Katarzyna'},
    {id: 9, key: 'Kierunek studiów', value: 'Zarządzanie i marketing'},
    {id: 10, key: 'Przypisane grupy', value: 'stac/zim/wyk/0, stac/zim/lab/1, stac/ang/7'},
    {id: 11, key: 'Semestr studiów', value: 'VII'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
