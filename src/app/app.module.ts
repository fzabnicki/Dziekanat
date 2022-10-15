import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationTopBarComponent } from './navigation-top-bar/navigation-top-bar.component';
import { NavigationSideMenuComponent } from './navigation-side-menu/navigation-side-menu.component';
import { LessonPlanComponent } from './lesson-plan/lesson-plan.component';
import { MessagesComponent } from './messages/messages.component';
import { GradesComponent } from './grades/grades.component';
import { LoginComponent } from './login/login.component';
import { UserInformationComponent } from './user-information/user-information.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './home/home.component'
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

export function tokenGetter(){
  return localStorage.getItem("acces_token");
}

@NgModule({
  declarations: [
    AppComponent,
    NavigationTopBarComponent,
    NavigationSideMenuComponent,
    LessonPlanComponent,
    MessagesComponent,
    GradesComponent,
    LoginComponent,
    UserInformationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:4200']
      }
    })
  ],
  providers: [
    FormBuilder,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
