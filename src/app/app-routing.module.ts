import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GradesComponent } from './grades/grades.component';
import { HomeComponent } from './home/home.component';
import { LessonPlanComponent } from './lesson-plan/lesson-plan.component';
import { LoginComponent } from './login/login.component';
import { MessagesComponent } from './messages/messages.component';
import { UserInformationComponent } from './user-information/user-information.component';

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: HomeComponent },
  {path: "login", component: LoginComponent },
  {path: "grades", component: GradesComponent },
  {path: "messages", component: MessagesComponent },
  {path: "user", component: UserInformationComponent },
  {path: "lessons", component: LessonPlanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
