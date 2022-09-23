import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArchivesService {

  // API url
  baseApiUrl = "http://localhost:8080/api/transaction/archives"
    
  constructor(private http:HttpClient) { }
  
  // Returns an observable
  upload():Observable<any> {
      let data = this.http.get(this.baseApiUrl)
      console.log("in archive service")
      console.log(data)
      return data
  }
}
