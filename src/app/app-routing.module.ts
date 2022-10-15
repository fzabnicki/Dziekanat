import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GradesComponent } from './grades/grades.component';
import { HomeComponent } from './home/home.component';
import { LessonPlanComponent } from './lesson-plan/lesson-plan.component';
import { LoginComponent } from './login/login.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './shared/authGuard';
import { UserInformationComponent } from './user-information/user-information.component';

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "login", component: LoginComponent },
  {path: "home", canActivate: [AuthGuard], component: HomeComponent },
  {path: "grades", canActivate: [AuthGuard], component: GradesComponent },
  {path: "messages", canActivate: [AuthGuard], component: MessagesComponent },
  {path: "user", canActivate: [AuthGuard], component: UserInformationComponent },
  {path: "lessons", canActivate: [AuthGuard], component: LessonPlanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
