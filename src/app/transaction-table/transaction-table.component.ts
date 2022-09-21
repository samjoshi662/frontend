import { OnInit, SimpleChanges } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { OnChanges } from '@angular/core';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { TransactionTableDataSource, TransactionTableItem } from './transaction-table-datasource';

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
  isFileUploaded : boolean;
  subscription : Subscription;
  transactions : any[]
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['transactionRefNo', 'valueDate', 'payerName', 'payerAccountNo', 'payeeName', 'payerAccountNo',
  'validationStatus',
  'sanctioningStatus',
  'sanctionFailMessage',
  'validationFailMessage'];
  constructor(private dataService: DataService, private cd: ChangeDetectorRef) {
    this.dataSource = new TransactionTableDataSource(this.transactions)
    console.log("In constructor")
  }
  ngOnInit(): void {
    this.subscription = this.dataService.currentTransactions.subscribe((transactions) => {
      this.transactions = transactions
      this.cd.markForCheck();
      this.cd.detectChanges()
      console.log("in check")
      this.dataSource = new TransactionTableDataSource(this.transactions)
      this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    console.log(this.dataSource)
    this.table.dataSource = this.dataSource;
    })
    console.log("in ng onit")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    console.log("hi")
  }
  ngAfterViewInit(): void {
    
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    console.log(this.dataSource)
    console.log("After view init")
    this.table.dataSource = this.dataSource;
  }
}
