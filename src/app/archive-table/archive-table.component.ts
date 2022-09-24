import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { ArchivesService } from '../services/archives.service';
import { DataService } from '../services/Data/data.service';
import { ArchiveTableDataSource, ArchiveTableItem } from './archive-table-datasource';

@Component({
  selector: 'app-archive-table',
  templateUrl: './archive-table.component.html',
  styleUrls: ['./archive-table.component.css']
})
export class ArchiveTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ArchiveTableItem>;
  dataSource: ArchiveTableDataSource;
  subscription : Subscription;
  transactions : any[]
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['transactionRefNo', 'valueDate', 'payerName', 'payerAccountNo', 'payeeName', 'payeeAccountNo','amount',
  'validationStatus',
  'sanctioningStatus',
  'sanctionFailMessage',
  'filename'
];
constructor(private dataService: DataService, private cd: ChangeDetectorRef, private archivesService : ArchivesService) {
 
  this.dataSource = new ArchiveTableDataSource(this.transactions)

}
  ngAfterViewInit(): void {
    
  }
  // applyFilter(filterValue: string) {
  //   filterValue = filterValue.trim(); // Remove whitespace
  //   filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
  //   this.dataSource.filter = filterValue;
  // }
  ngOnInit(): void {

    this.archivesService.upload().subscribe((transactions)=>{
      this.dataService.setTransactions(transactions)
      this.transactions = transactions
      console.log(this.transactions)
      console.log("oninit")
      this.transactions.forEach((transaction)=>{
        if(transaction.sanctioningStatus !== "Pass"){
          transaction.color = "#f2dede"
        }
        else{
          transaction.color = "#dff0d8"
        }
      })
      this.dataSource = new ArchiveTableDataSource(this.transactions)
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource
    })
    
    }
   
      
    }
  


