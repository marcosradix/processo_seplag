import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, finalize, retry} from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class CustomHttpInterceptorService implements HttpInterceptor{

  
constructor(private router:Router){}
   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

const helper = new JwtHelperService();
 
const token = localStorage.getItem('ng2_token');
const decodedToken = helper.decodeToken(token);
const expirationDate = helper.getTokenExpirationDate(token);
const isExpired = helper.isTokenExpired(token);
    // Add Auth Token
    // In production you would get the token value from an auth service
    
    if(!token || isExpired){
      this.router.navigate(["/login"]);
    }
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    return next.handle(req)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          // TODO: Add error handling logic here
          //alert(`HTTP Error: ${req.url}`);
          return throwError(error);
        }),

        // PROFILING
        finalize(() => {
          const profilingMsg = `${req.method} "${req.urlWithParams}"`;
          console.log(profilingMsg);
        })
        );
  }
  }