import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../services/Data/data.service';
import { SanctionService } from '../services/Sanction/sanction.service';

@Component({
  selector: 'app-sanction-button',
  templateUrl: './sanction-button.component.html',
  styleUrls: ['./sanction-button.component.css']
})
export class SanctionButtonComponent implements OnInit {
  transactions : any[]
  constructor(private sanctionService: SanctionService, private data : DataService) { }
  subscription : Subscription
  ngOnInit(): void {
    this.subscription = this.data.currentTransactions.subscribe(transactions => this.transactions = transactions)
}
  onUpload() {
   
    this.sanctionService.upload().subscribe(
        (data: any) => {
                this.transactions = data
                this.data.setTransactions(this.transactions)
                console.log(this.transactions)
        }
    );
}
}
