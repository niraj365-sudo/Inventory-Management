import { Component } from '@angular/core';
import { LoginRegisterService } from '../_services/login-register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private ser: LoginRegisterService, private router: Router) {}

  onLogin() {
    // this.ser.login(this.username, this.password).subscribe(
      this.ser.login(this.username, this.password).subscribe(
      (res: any) => {
        // Handle Successful login
        const token = res.token;
        // Save token to local storage or a cookie for further use
        localStorage.setItem('token', token);
  
        // Redirect to the dashboard or any other route
        this.router.navigate(['/']);
  
        // Clear username and password fields
        this.username = '';
        this.password = '';
      },
      (error) => {
        // Handle login error
        console.error(error);
        // Show an error message to the user or perform any other error handling
        // Clear username and password fields
        this.username = '';
        this.password = '';
      }
    );
  }
  
}
