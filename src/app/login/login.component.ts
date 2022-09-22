import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/Auth/auth.service';

export class User{
  "id": string | null;
  "username": string;
  "password": string;
  "role": string;
  "status": string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;

  constructor(private router: Router,private authService: AuthService) {}

  ngOnInit(): void {
  }

  handleLogin() {

    this.authService.login(this.username, this.password).subscribe((result : null | User) => {
      if(result!=null){
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful';
      this.router.navigate([''])
      sessionStorage.setItem('username', this.username)
      sessionStorage.setItem('role', result.role)
      // redirect to main page
      this.router.navigate([''])
      }
      else{
        this.invalidLogin = true;
      this.loginSuccess = false;
      }
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });
  }

}
