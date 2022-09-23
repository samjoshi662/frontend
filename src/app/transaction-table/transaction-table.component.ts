import { SelectionModel } from '@angular/cdk/collections';
import { OnInit, SimpleChanges } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { OnChanges } from '@angular/core';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { DataService } from '../services/Data/data.service';
import { TransactionTableDataSource, TransactionTableItem } from './transaction-table-datasource';
class dropdown {
  value : string;
  viewValue : string
}
@Component({
  selector: 'app-transaction-table',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.css']
})
export class TransactionTableComponent implements AfterViewInit, OnInit, OnChanges {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TransactionTableItem>;
  dataSource: TransactionTableDataSource;
  subscription : Subscription;
  selection = new SelectionModel<Element>(true, []);
  filterValue :string 
  transactions : any[]
  status : dropdown[]
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['transactionRefNo', 'valueDate', 'payerName', 'payerAccountNo', 'payeeName', 'payerAccountNo',
  'validationStatus',
  'sanctioningStatus',
  'sanctionFailMessage',
  // 'validationFailMessage'
];

  constructor(private dataService: DataService, private cd: ChangeDetectorRef) {
    this.dataSource = new TransactionTableDataSource(this.transactions)
    console.log("In constructor")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.filterValue)
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    this.status = [
      {value: 'validationStatusPass', viewValue: 'Validation Status - Pass'},
      {value: 'validationStatusFail', viewValue: 'Validation Status - Fail'},
      {value: 'sanctioningStatusPass', viewValue: 'Sanctioning Status - Pass'},
      {value: 'sanctioningStatusFail', viewValue: 'Sanctioning Status - Fail'},
      {value: 'all', viewValue: 'All'},
    ];
  
    this.filterValue = 'all'
    this.subscription = this.dataService.currentTransactions.subscribe((transactions) => {
      this.transactions = transactions
      this.cd.markForCheck();
      this.cd.detectChanges()
      this.dataSource = new TransactionTableDataSource(this.transactions)
      this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    console.log(this.dataSource)
    this.table.dataSource = this.dataSource;
    })
  }
 
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    console.log(this.dataSource)
    console.log("After view init")
    this.table.dataSource = this.dataSource;
  }

  onFilterChange(val : any) : void {
    console.log(val)
    let elements
    if(val === 'validationStatusPass'){
      elements = this.transactions.filter(transaction =>{
        return transaction.validationStatus === 'Pass'
      })
    }
    else if(val === 'validationStatusFail'){
      elements = this.transactions.filter(transaction =>{
        return transaction.validationStatus !== 'Pass'
      })

    }
  else if (val=== 'sanctioningStatusPass'){
    elements = this.transactions.filter(transaction =>{
      return transaction.sanctioningStatus === 'Pass'
    })
  }
    else if (val === 'sanctioningStatusFail'){
      elements = this.transactions.filter(transaction =>{
        return transaction.sanctioningStatus !== 'Pass'
      })
    }
    else{
      elements = this.transactions
    }
    this.dataSource = new TransactionTableDataSource(elements)
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;

  }
}