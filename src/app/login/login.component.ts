import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './shared/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])
  })
  invalidLogin?: boolean;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }

  login() {
    if (this.form.valid) {
      this.authService.login({ email: this.email.value, password: this.password.value }).subscribe({
        next: (response) => {
          const token = (<any>response).token;
          localStorage.setItem("acces_token", token);
          this.invalidLogin = false;
          this.router.navigate(["/home"]);
        }, error: (err) => {
          this.invalidLogin = true;
        }
      })
    }
  }
}
