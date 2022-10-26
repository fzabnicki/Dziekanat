import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-navigation-side-menu',
  templateUrl: './navigation-side-menu.component.html',
  styleUrls: ['./navigation-side-menu.component.scss']
})
export class NavigationSideMenuComponent implements OnInit {

  messageCount: number = 0;
  private jwtHelper: JwtHelperService = new JwtHelperService();
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.messageCount = 0;
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
