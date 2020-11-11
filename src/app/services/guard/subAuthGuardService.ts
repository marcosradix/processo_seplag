
import { Injectable }       from '@angular/core';
import { CanLoad, Route, Router, CanActivate } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { RoleNames } from 'src/app/enuns/role_names';
 
@Injectable({
  providedIn: 'root'
})
export class SubAuthGuardService implements CanActivate {
  
  constructor(private router: Router) {
  }
 
  canActivate(): boolean {
    const helper = new JwtHelperService();
    const token = localStorage.getItem('ng2_token');
    const decodedToken = helper.decodeToken(token);
    const roleUser = decodedToken['roles'][RoleNames.ROLE_USER];
    const roleAdmin = decodedToken['roles'][RoleNames.ROLE_ADMIN];
    if (roleAdmin=='ROLE_ADMIN' && roleUser=='ROLE_USER') {
      return true;
    }  

    if (roleUser=='ROLE_USER') {
      //alert('Você não tem autorização para carregar isso!');
      this.router.navigate(['/lancamento/salvar']);
      return false;
    }  
    return true; 
  }
} 