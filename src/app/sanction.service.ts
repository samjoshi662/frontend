import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SanctionService {
    
  // API url
  baseApiUrl = "http://localhost:8008/api/transaction/sanction"
    
  constructor(private http:HttpClient) { }
  
  // Returns an observable
  upload():Observable<any> {
        
      // Make http post request over api
      // with formData as req
      let data = this.http.get(this.baseApiUrl)
      console.log(data)
      return data
  }
}