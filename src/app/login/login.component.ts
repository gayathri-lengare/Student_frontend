import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule,],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginData = {
    username: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  login() {

    this.authService.login(this.loginData)
      .subscribe({
        next: (response: any) => {

          // STORE TOKEN
          localStorage.setItem(
            'token',
            response.token
          );

          alert('Login Successful');

          // NAVIGATE
          this.router.navigate(['/students']);
        },

        error: () => {

          alert('Invalid Username or Password');
        }
      });
  }
}