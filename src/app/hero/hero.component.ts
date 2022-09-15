import { Component, OnInit } from '@angular/core';

import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UploadFileService } from 'services/file.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent implements OnInit {

 

  constructor(private fileservice: UploadFileService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



}







