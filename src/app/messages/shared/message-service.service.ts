import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from 'src/app/shared/message';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  private url = 'https://localhost:44392/api/';
  private httpHeaders = { headers:new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem("acces_token")!}) };
  
  constructor(private http: HttpClient) { }

  getMessages(): Observable<Message[]>{
    return this.http.get<Message[]>(this.url + 'Message', this.httpHeaders);
  }
  readMessage(id: string): Observable<any>{
    return this.http.post(this.url + 'Message/read?id=' + id, null, this.httpHeaders);
  }
}
