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
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home/home.component'
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Overlay } from '@angular/cdk/overlay';
import { AuthGuard } from './shared/authGuard';
import { SpinnerComponent } from './spinner/spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpinnerInterceptor } from './spinner/shared/spinner-interceptor';


export function tokenGetter() {
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
    HomeComponent,
    SpinnerComponent
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
    MatProgressSpinnerModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:4200"],
        disallowedRoutes: []
      }
    })
  ],
  providers: [
    MatSnackBar,
    Overlay,
    AuthGuard,
    {
      provide: JwtHelperService,
      useFactory: () => new JwtHelperService()
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
