import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate() {

    const helper = new JwtHelperService();

    const token = localStorage.getItem('ng2_token');
    const decodedToken = helper.decodeToken(token);
    const expirationDate = helper.getTokenExpirationDate(token);
    const isExpired = helper.isTokenExpired(token);

    if (!token || isExpired) {
      this.router.navigate(["/login"]);
      return false;
    }

    return true;
  }
}
