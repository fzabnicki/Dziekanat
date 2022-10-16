import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginResponseI } from 'src/app/shared/loginResponse';
import { UserCredentials } from 'src/app/shared/userCredentials';
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
  }

  login(userCredentials: UserCredentials): Observable<LoginResponseI> {
    return this.http.post<LoginResponseI>("https://localhost:44392/api/login/login", userCredentials).pipe(
      tap((res: LoginResponseI) => localStorage.setItem('acces_token', res.acces_token)),
      tap(() => this.snackBar.open('Login succesfull', 'Close', { duration: 2000, horizontalPosition: 'right', verticalPosition: 'top' }))
    );
  }



}