import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-navigation-top-bar',
  templateUrl: './navigation-top-bar.component.html',
  styleUrls: ['./navigation-top-bar.component.scss']
})
export class NavigationTopBarComponent{

  private jwtHelper: JwtHelperService = new JwtHelperService();

  constructor( private router: Router) { 
  }

  isUserAuthenticated() {
    const token = localStorage.getItem("acces_token");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    else {
      return false;
    }
  }

  public logOut = () => {
    localStorage.removeItem("acces_token");
  }

}
