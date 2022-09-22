import { AfterViewInit, ChangeDetectorRef, Component, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { DataService } from '../services/Data/data.service';
import { DashboardTableDataSource, DashboardTableItem } from './dashboard-table-datasource';

@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.css']
})
export class DashboardTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<DashboardTableItem>;
  dataSource: DashboardTableDataSource;
  fileInformation : any[]
  subscription :Subscription
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['filename','numTransactions','time', 'numValidationFailed', 'numSanctionFailed'];
  constructor(private dataService: DataService, private cd: ChangeDetectorRef) {
    this.dataSource = new DashboardTableDataSource(this.fileInformation)
    console.log("In constructor")
  }
  ngOnInit(): void {
    this.subscription = this.dataService.currentFileInformation.subscribe((fileInformation) => {
      this.fileInformation= fileInformation
      this.cd.markForCheck();
      this.cd.detectChanges()
      console.log("in check")
      this.dataSource = new DashboardTableDataSource(this.fileInformation)
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
