import { Injectable } from "@angular/core";
import { CanActivate, Router} from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
    providedIn: 'root'
  })
export class AuthGuard implements CanActivate{

  private jwtHelper: JwtHelperService = new JwtHelperService();

    constructor(private router: Router) {
    }
    canActivate() {
  
      const token = localStorage.getItem("acces_token");
  
      if (token && !this.jwtHelper.isTokenExpired(token)){
        return true;
      }
      this.router.navigate(["login"]);
      return false;
    }
}