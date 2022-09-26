import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
 date : Date
 day: any
 year : any
 month : any

  constructor() { 
    this.date = new Date();
    this.year = this.date.getFullYear();
  this.month = this.date.getMonth() + 1;
    this.day = this.date.getDate();
  }
  ngOnInit(): void {
  }

}
