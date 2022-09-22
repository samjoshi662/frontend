import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TruncateService {
  baseApiUrl = "http://localhost:8080/api/transaction/truncate"
    
  constructor(private http:HttpClient) { }
  
  // Returns an observable
  upload() {
      console.log("In truncate")
      let data = this.http.get(this.baseApiUrl)
      
      return new Observable()
  }
}
