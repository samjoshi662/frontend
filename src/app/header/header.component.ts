import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  empName : string
  constructor() { 
    this.empName = sessionStorage.getItem('name')
    console.log(this.empName)
  }

  ngOnInit(): void {
    this.empName = sessionStorage.getItem('name')
  }

}
