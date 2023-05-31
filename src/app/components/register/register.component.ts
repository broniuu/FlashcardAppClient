import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {RegisterDto} from "../../models/registerDto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public registerDto: RegisterDto = {
    password: '',
    name: '',
    email: ''
  }
  constructor(private authService: AuthService, private router: Router) {
  }

  createAccount(): void {
    this.authService.createOrUpdate(this.registerDto).subscribe(result => {
      this.router.navigate(['/']);
    });
  }

}
