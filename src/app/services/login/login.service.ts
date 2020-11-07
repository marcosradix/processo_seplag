import { LoginForm } from 'src/app/models/loginForm.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { SignUpForm } from 'src/app/models/signUpForm.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly PATH: string = 'auth';

  constructor(private http: HttpClient) { }

  signin(loginForm:LoginForm):Observable<any>{
    return this.http.post(`${env.baseUrlApi}/api/${this.PATH}/signin`, loginForm);
  }

    signup(signUpForm: SignUpForm):Observable<any>{
    return this.http.post(`${env.baseUrlApi}/api/${this.PATH}/signup`, signUpForm);
  }

}
