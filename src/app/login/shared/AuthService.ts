import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/shared/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = "localhost////";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
  }

  public login(username: string, password: string): Observable<User> {
    return this.http.post<User>("post", { username, password }, this.httpOptions);
  }

  

}