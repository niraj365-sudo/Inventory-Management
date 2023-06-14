import { Component } from '@angular/core';
import { LoginRegisterService } from '../_services/login-register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  firstname: string = '';
  lastname: string = '';
  username: string = '';
  email: string = '';
  password: string = '';
  confirm: string = '';

  constructor(private ser:LoginRegisterService, private router: Router){

  }

  onRegister(){
    const data = {
      firstname: this.firstname,
      lastname: this.lastname,
      username: this.username,
      email: this.email,
      password: this.password, 
      confirm: this.confirm,
    }
    this.ser.register(data).subscribe(
      (res) => {
        this.firstname = '';
        this.lastname = '';
        this.username = '';
        this.email = '';
        this.password = '';
        this.confirm = '';
        console.log(res);

        this.router.navigate(['/login']);
      }
    );

  }

}
