import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KeywordService {

  baseApiUrlAdd = "http://localhost:8080/api/keyword/add/"
  baseApiUrlRemove = "http://localhost:8080/api/keyword/remove/"
  baseApiUrlGet = "http://localhost:8080/api/keyword/get/"
    
  constructor(private http:HttpClient) { }
  
  // Returns an observable
  add(keyword : string):Observable<any> {
      const formData = new FormData(); 
      formData.append("keyword", keyword);
      let data = this.http.post(this.baseApiUrlAdd, formData)
      console.log(data)
      return data
  }

  remove(keyword : string):Observable<any> {
    const formData = new FormData(); 
    formData.append("keyword", keyword);
    let data = this.http.post(this.baseApiUrlRemove, formData)
    console.log(data)
    return data
}

get():Observable<any> {
  
  let data = this.http.get(this.baseApiUrlGet)
  console.log(data)
  return data
}
}
