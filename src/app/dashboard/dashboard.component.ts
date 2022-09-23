import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DashboardService } from '../services/dashboard.service';
import { DataService } from '../services/Data/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  subscription : Subscription
  fileData : any[]
  constructor(private dashboardService: DashboardService, private data : DataService) {
    this.dashboardService.upload().subscribe(
      (data: any[]) => {
          console.log(this.data.currentTransactions)
              this.fileData= data
              console.log(data)
              console.log(this.data.currentTransactions)
              this.data.setFileInformation(this.fileData)
      }
  );
   }
  
    ngOnInit(): void {
        this.subscription = this.data.currentFileInformation.subscribe(fileData => this.fileData = fileData)
        this.dashboardService.upload().subscribe(
          (data: any[]) => {
              console.log(this.data.currentTransactions)
                  this.fileData= data
                  console.log(data)
                  console.log(this.data.currentTransactions)
                  this.data.setFileInformation(this.fileData)
          }
      );
    }
}
