import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})


export class AuthService {
  
  constructor(private httpClient: HttpClient) {

  }

  login(username: string, password: string) {
    const formData = new FormData(); 
      formData.append("username", username);
      formData.append("password", password);
      let data = this.httpClient.post('http://localhost:8080/api/v1/validateLogin', formData)
      return data

  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }
  logOut() {
    sessionStorage.removeItem('username')
  }
}
