import { Injectable } from '@angular/core';
import {BehaviorSubject } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private transactionSource = new BehaviorSubject([]);
  
  currentTransactions = this.transactionSource.asObservable();
  constructor() { 

  }

  setTransactions(transactionData : any[]){
    this.transactionSource.next(transactionData)
    console.log(transactionData)
  
  }

 
}
