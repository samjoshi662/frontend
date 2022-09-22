import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../services/Data/data.service';
import { TruncateService } from '../services/Truncate/truncate.service';

@Component({
  selector: 'app-truncate-button',
  templateUrl: './truncate-button.component.html',
  styleUrls: ['./truncate-button.component.css']
})
export class TruncateButtonComponent implements OnInit {
  transactions : any[]
  constructor(private truncateService: TruncateService, private data : DataService) { }
  subscription : Subscription
  ngOnInit(): void {
    this.subscription = this.data.currentTransactions.subscribe(transactions => this.transactions = transactions)
}
  onUpload() {
   
    this.truncateService.upload().subscribe(
        (data: any) => {
                this.data.setTransactions([])
                console.log(this.transactions)
        }
    );
}
}