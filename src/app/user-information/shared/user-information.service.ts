import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/user';

@Injectable({
  providedIn: 'root'
})
export class UserInformationService {

  private url = 'https://localhost:44392/api/';
  private httpHeaders = { headers:new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem("acces_token")!}) };
  
  constructor(private http: HttpClient) { }
  
  getUserDetailsById(): Observable<User> {
    return this.http.get<User>(this.url + 'Student', this.httpHeaders);
  }
}
