import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../services/Data/data.service';
import { TruncateService } from '../services/Truncate/truncate.service';
import '../../assets/smtp.js'
declare let Email : any
export interface TransactionTableItem {
  name: string;
  id: number;
  transactionRefNo: string ;
  valueDate: string ;
  payerName:string    ; 
  payerAccountNumber:string ;
  payeeName: string;
  payeeAccountNumber : string;
  amount : number;
  validationStatus : string ;
  sanctioningStatus : string ;
  sanctionFailMessage : string;
  validationFailMessage : string;
  filename : string
}
@Component({
  selector: 'app-truncate-button',
  templateUrl: './truncate-button.component.html',
  styleUrls: ['./truncate-button.component.css']
})
export class TruncateButtonComponent implements OnInit {
  transactions : TransactionTableItem[]
  constructor(private truncateService: TruncateService, private data : DataService) { }
  subscription : Subscription
 
  ngOnInit(): void {
    this.subscription = this.data.currentTransactions.subscribe(transactions => this.transactions = transactions)
}
  onUpload() {
    let body = "<table><tr><th>Transaction ID</th><th>Sanctioning Status</th><th>Message</th></tr>  "
    this.transactions.forEach((transaction : TransactionTableItem)=>{
      var sentence = "<tr><td>"+transaction.transactionRefNo+"</td><td>"+
      transaction.sanctioningStatus+"</td><td>"+transaction.sanctionFailMessage +" " + transaction.validationFailMessage +"</td></tr>"
      body = body + sentence 
    })
    body = body + "</table>"
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "shahnupur1901@gmail.com",
      Password : "F38D8DC03E3DFFA71553077FDC61D408FD5E",
      To : 'shahnupur1901@gmail.com',
      From : "shahnupur1901@gmail.com",
      Subject : "Sanction Report",
      Body : body
  }).then(
    message => {
      if(message!="ok") alert("Email sent.")
      else alert(message)
    }
  );

    this.truncateService.upload().subscribe(
        (data: any) => {
                this.data.setTransactions([])
                console.log(this.transactions)
        },
        ()=>{
            this.data.setTransactions([])
                console.log(this.transactions)
        }
    );
}
}

