import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';
import { UserInformationService } from './shared/user-information.service';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss']
})
export class UserInformationComponent implements OnInit {

  displayedColumns: string[] = ['key', 'value'];
  dataSource = [{}];
  groupString: string = '';

  constructor(private userInformationService: UserInformationService) { }

  ngOnInit(): void {
    this.userInformationService.getUserDetailsById().subscribe((response) => {
      this.processGrid(response);
    })
  }

  private processGrid(input: User) {
    if (input.groups.length != 0) {
      input.groups.map((item) => {
        this.groupString += item.name + ', '
        console.log(item.name)
      })
      this.groupString = this.groupString.substring(0, this.groupString.length -2);
    }

    this.dataSource = [
      { id: 1, key: 'Imie', value: input.personalInformations.name },
      { id: 2, key: 'Nazwisko', value: input.personalInformations.surName },
      { id: 3, key: 'E-mail', value: input.email },
      { id: 4, key: 'PESEL', value: input.personalInformations.pesel },
      { id: 5, key: 'Data urodzenia', value: input.personalInformations.birthDate},
      { id: 6, key: 'Obyywatelstwo', value: input.personalInformations.citizenship },
      { id: 7, key: 'Imię Ojca', value: input.personalInformations.fathersName },
      { id: 8, key: 'Imię Matki', value: input.personalInformations.mothersName },
      { id: 9, key: 'Kierunek studiów', value: input.personalInformations.fieldOfStudy },
      { id: 10, key: 'Przypisane grupy', value: this.groupString },
      { id: 11, key: 'Semestr studiów', value: input.personalInformations.semester },
    ]
  }

}
