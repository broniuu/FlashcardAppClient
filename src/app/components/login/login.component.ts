import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Credentials} from "../../models/credentials";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public credentials: Credentials = {
    login: '',
    password: ''
  }

  public logged?: boolean;
  public logout?: boolean;
  constructor(private authService: AuthService, private router: Router) {
  }

  singIn(credentials: Credentials) {
    return this.authService.authenticate(this.credentials).subscribe((result) => {
      if (!result) {
        this.logged = false;
      } else {
        this.logout = false;
        this.credentials = {
          login: '',
          password: '',
        };
        this.router.navigate(['/']);
      }
    });
  }
}
