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
  passwordInvalid = false
  passwordInvalidMessage = "Password must be greater 8 than characters"
  constructor(private router: Router,private authService: AuthService) {
    sessionStorage.clear()
  }

  ngOnInit(): void {
  }
  onChange(){
    if(this.password.length >= 8){
      this.passwordInvalid = false
    }
    this.invalidLogin = false
  }
  handleLogin() {
    this.authService.login(this.username, this.password).subscribe((result : null | User) => {
      if(this.password.length < 8){
        this.passwordInvalid = true
        return
      }
      if(result!=null){
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful';
      this.router.navigate([''])
      console.log(result)
      sessionStorage.setItem('username', this.username)
      sessionStorage.setItem('role', result.role)
      sessionStorage.setItem('name',result.status)
      console.log(result)
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
