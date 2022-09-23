import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Subscription } from 'rxjs';
import { DashboardService } from '../services/dashboard.service';
import { DataService } from '../services/Data/data.service';
@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {
  subscription : Subscription
  fileData : any[]
  BarChart : any
  PieChart : any
  constructor(private dashboardService: DashboardService, private data : DataService, private cd:ChangeDetectorRef) {
    Chart.register(...registerables);
    this.dashboardService.upload().subscribe(
      (data: any[]) => {
          console.log(this.data.currentTransactions)
              this.fileData= data
              console.log(data)
              console.log(this.data.currentTransactions)
              this.data.setFileInformation(this.fileData)
      }
  )};
  ngOnInit(): void {
    this.subscription = this.data.currentFileInformation.subscribe(fileData => this.fileData = fileData)
    this.dashboardService.upload().subscribe(
      (data: any[]) => {
          console.log(this.data.currentTransactions)
              this.fileData= data

              console.log(data+"in dashcomponent")
              this.createBarChart()
              this.createPieChart()
              this.cd.markForCheck();
              this.cd.detectChanges()

              console.log(this.data.currentTransactions)
              this.data.setFileInformation(this.fileData)
      }
  );
}


createBarChart(){
  let labels = this.fileData.map(data =>{
    return data.filename
  })
  console.log(this.fileData)
  this.BarChart = new Chart("MyChart", {
    type: 'bar', //this denotes tha type of chart

    data: {// values on X-Axis
      labels: labels.slice(0,5),
       datasets: [
        {
          label: "Number of transactions",
          data: this.fileData.map(data=>{
            return data.numTransactions
          }).slice(0,5),
          backgroundColor: 'blue',
          
        },
        {
          label: "Number of Sanctioned transactions",
          data: this.fileData.map(data=>{
            return data.numTransactions - data.numSanctionFailed 
          }).slice(0,5),
          backgroundColor: 'limegreen'
        }  
      ]
    },
    options: {
      aspectRatio:2.5
    }
    
  });
}

createPieChart(){
  var validationFail = 0
  var sanctionedFail = 0
  var numTransactions = 0
  this.fileData.forEach((file)=>{
    validationFail  = validationFail  + file.numValidationFailed
    sanctionedFail  = sanctionedFail  + file.numSanctionFailed
    numTransactions = numTransactions + file.numTransactions
  })
  console.log(validationFail)
  console.log(sanctionedFail)
  console.log(numTransactions)
  this.PieChart = new Chart("PieChart", {
    type: 'pie', //this denotes tha type of chart
    data: {// values on X-Axis
      labels: ['Validations failed', 'Sanction failed and validation passed', 'Sanctioned pass'],
       datasets: [
        {
          label: "Transactions",
          data:[validationFail, sanctionedFail - validationFail,numTransactions - sanctionedFail ],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset : 6
          
        }, 
      ],

    },
   
    
  });
}

}

