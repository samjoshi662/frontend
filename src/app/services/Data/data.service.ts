import { Injectable } from '@angular/core';
import {BehaviorSubject } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private transactionSource = new BehaviorSubject([]);
  currentTransactions = this.transactionSource.asObservable();
  private fileInformationSource = new BehaviorSubject([]);
  currentFileInformation = this.fileInformationSource.asObservable();
  constructor() { }

  setTransactions(transactionData : any[]){
    this.transactionSource.next(transactionData)
    console.log(transactionData)
  
  }

  setFileInformation(fileData : any[]){
    this.fileInformationSource.next(fileData)
    console.log(fileData)
  
  }

 
}
