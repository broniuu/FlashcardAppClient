import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Token} from "../models/token";
import {map} from "rxjs";
import {JwtHelperService} from "@auth0/angular-jwt";
import {Credentials} from "../models/credentials";
import {RegisterDto} from "../models/registerDto";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:3001/api';

  constructor(private http: HttpClient) {
  }
  authenticate(credentials: Credentials) {
    return this.http.post(this.url + '/user/auth', credentials).pipe(
      map((result: Token | any) => {
        if (result && result.token) {
          localStorage.setItem('token', result.token);
          return true;
        }
        return false;
      })
    );
  }

  createOrUpdate(registerDto: RegisterDto) {
    console.log(registerDto);
    return this.http.post(this.url + '/user/create', registerDto);
  }

  logout() {
    return this.http.delete(this.url + '/user/logout/' + this.currentUser.userId)
      .pipe(map(() => {
        localStorage.removeItem('token');
      }));
  }

  isLoggedIn() {
    const jwtHelper = new JwtHelperService();
    const token = localStorage.getItem('token');
    if (!token) {
      return false
    }
    return !(jwtHelper.isTokenExpired(token));
  }
  get currentUser() {
    const token = this.getToken();
    if (!token) {
      return null;
    }
    return new JwtHelperService().decodeToken(token);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
