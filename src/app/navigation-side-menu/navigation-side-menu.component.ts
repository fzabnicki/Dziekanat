import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-navigation-side-menu',
  templateUrl: './navigation-side-menu.component.html',
  styleUrls: ['./navigation-side-menu.component.scss']
})
export class NavigationSideMenuComponent {

  private jwtHelper: JwtHelperService = new JwtHelperService();
  constructor(private router: Router) {
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


}
