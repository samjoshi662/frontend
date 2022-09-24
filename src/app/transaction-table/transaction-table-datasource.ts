import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { DataService } from '../services/Data/data.service';

// TODO: Replace this with your own data model type
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
  filename : string,
  color : string
}
/**
 * Data source for the TransactionTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TransactionTableDataSource extends DataSource<TransactionTableItem> {
  data: TransactionTableItem[]
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;
  constructor(data : any[]) {
    super();
    console.log("in TTDS constructor")
    this.data = data
    console.log(this.data)
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<TransactionTableItem[]> {
   // this.data = this.dataService.currentTransactions
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      let x = merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          let y = this.getPagedData(this.getSortedData([...this.data ]));
          console.log(y)
          return y
        }));
        console.log(x)
        return x
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: TransactionTableItem[]): TransactionTableItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: TransactionTableItem[]): TransactionTableItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
