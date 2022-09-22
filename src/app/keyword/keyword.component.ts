import { Component, OnInit } from '@angular/core';
import { KeywordService } from '../services/Keyword/keyword.service';
import { SanctionService } from '../services/Sanction/sanction.service';

@Component({
  selector: 'app-keyword',
  templateUrl: './keyword.component.html',
  styleUrls: ['./keyword.component.css']
})
export class KeywordComponent implements OnInit {
  keywords :string[]
  keyword : string
  constructor(private keywordService: KeywordService) { }

  ngOnInit(): void {
    this.keywordService.get().subscribe((keywords)=>{
      this.keywords = keywords
    })
  }
  add() {
    this.keywordService.add(this.keyword).subscribe(
        () => {
          this.keywordService.get().subscribe((keywords)=>{
            this.keywords = keywords
          })
        }, ()=>{
          this.keywordService.get().subscribe((keywords)=>{
            this.keywords = keywords
          })
        }
    );
}

remove() {
  this.keywordService.remove(this.keyword).subscribe(
      () => {
        this.keywordService.get().subscribe((keywords)=>{
          this.keywords = keywords
        })
      },
      () => {
        this.keywordService.get().subscribe((keywords)=>{
          this.keywords = keywords
        })
      }
  );
}}


