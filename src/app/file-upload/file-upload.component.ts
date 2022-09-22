
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../services/Data/data.service';
import { FileUploadService } from '../services/File-Upload/file-upload.service';
  
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
            }
        );
    }
}