import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthUserDataService {

  constructor(private _HttpClient : HttpClient) { }

  sendSignupData(signupData : object):Observable<any> {
    return this._HttpClient.post("https://routeegypt.herokuapp.com/signin", signupData);
  }

  sendLoginData(loginData : object):Observable<any> {
    return this._HttpClient.post("https://revive-eg.herokuapp.com/login", loginData);
  }
  
}
