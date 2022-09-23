import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../services/Data/data.service';
import { TransactionTableDataSource } from '../transaction-table/transaction-table-datasource';

@Component({
  selector: 'app-SanctionPage',
  templateUrl: './SanctionPage.component.html',
  styleUrls: ['./SanctionPage.component.css']
})

export class SanctionPageComponent implements OnInit {
  isDataUploaded : boolean
  subscription :Subscription
  constructor(private dataService: DataService, private cd: ChangeDetectorRef) {
    console.log("In constructor")
  }
  ngOnInit(): void {
    this.subscription = this.dataService.currentTransactions.subscribe((transactions) => {
      this.cd.markForCheck();
      this.cd.detectChanges()
      if (transactions.length > 0){
        this.isDataUploaded = true
      }
      else{
        this.isDataUploaded = false
      }

      console.log("in check")
    })
    console.log("in ng onit")
  }
}
