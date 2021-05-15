import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class TokenInterceptorInterceptor implements HttpInterceptor {

  token

  constructor(private auth: AuthService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {    
    const headers = new HttpHeaders(
      {
        'Content-Type': 'application/json'        
      }
    );
    req = req.clone(
      {
        headers
      }
    ); 
            
    if(!this.auth.isAuth()){
      return next.handle(req)
        .pipe(
          catchError(this.handleError)
        );
    }
    return from(this.auth.getStorage()
    .then(
      (data) => {
        //data storage
        if (data) {
          this.token = data.token;
          if (this.token) {    

            req = req.clone({
              setHeaders:{
                'Authorization': `bearer ${this.token}`
              }
            });    
          

        }

        return next.handle(req)
        .pipe(
          catchError(this.handleError)
        ).toPromise(); 
        }
      }
    )
    .catch((err)=>{
      console.log("error req",err);
      return next.handle(req)
        .pipe(
          catchError(this.handleError)
        ).toPromise(); 
    })
    );
  }


  // handle error
  handleError(error: HttpErrorResponse) {
    console.log("ERROR=>",error);
    return throwError(error.error.error);
  }
}
