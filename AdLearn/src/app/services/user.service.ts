import { Injectable } from '@angular/core';
import {User} from '../shared/user';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
//import { ProcessHTTPMsgService} from '../services/process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getUser(): Observable<User> {
    return this.http.get<User>(baseURL + 'read');
  }

  signUp(user: User): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<User>(baseURL + 'signup', user, httpOptions);
     // .pipe(catchError(this.processHTTPMsgService.handleError));
  }
  
  signIn(user: User): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<User>(baseURL + 'signup', user, httpOptions);
     // .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
