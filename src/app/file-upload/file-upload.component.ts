
import { Component, OnInit } from '@angular/core';
import { MatPseudoCheckbox } from '@angular/material/core';
import { Subscription } from 'rxjs';
import { DataService } from '../services/Data/data.service';
import { FileUploadService } from '../services/File-Upload/file-upload.service';
declare let Email : any
@Component({
    selector: 'app-file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
    // Variable to store shortLink from api response
    shortLink: string = "";
    loading: boolean = false; // Flag variable
    file: File = null; // Variable to store file
    transactions : any;
    subscription : Subscription
    // Inject service 
    constructor(private fileUploadService: FileUploadService, private data : DataService) { }
  
    ngOnInit(): void {
        this.subscription = this.data.currentTransactions.subscribe(transactions => this.transactions = transactions)
    }
  
    // On file Select
    onChange(event) {
        this.file = event.target.files[0];
    }
  
    // OnClick of button Upload
    onUpload() {
        this.loading = !this.loading;
        this.fileUploadService.upload(this.file).subscribe(
            (data: any[]) => {
                console.log(this.data.currentTransactions)
                    this.transactions = data
                    console.log(data)
                    console.log(this.data.currentTransactions)
                    this.data.setTransactions(this.transactions)
                    this.loading = false; // Flag variable 
                    console.log(this.data.currentTransactions)
                    let refNo : string
                    for (let i=0;i<data.length;i++){
                        if(data[i].validationStatus === "Fail"){
                            refNo = data[i].transactionRefNo
                            break
                        }
                    }
        //             this.fileUploadService.email().subscribe((emails :[])=>{
        //                 console.log(emails)
        //                 emails.forEach((email)=>{
        //                     Email.send({
        //                         Host : "smtp.elasticemail.com",
        //                         Username : "nupurdata1901@gmail.com",
        //                         Password : "",
        //                         To : email,
        //                         From : "nupurdata1901@gmail.com",
        //                         Subject : "Transaction Failure",
        //                         Body : "Your transaction with reference no "+refNo+" has failed. Please contact your bank for further information."
        //                     }).then(
        //                       message => {
        //                         alert("Email sent "+(message))
        //                         // if(message!="ok") alert("Email sent.")
        //                         // else alert(message)
        //                       }
        //                     )
        //             })
                
        //     }
        // )
    }
    )};
        
}