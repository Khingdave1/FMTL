import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {

  content: any;

  constructor(private pagesService: PagesService) { }

  ngOnInit(): void {
    // Get Pojects data
    this.getProjectsData()
  }

  // Get Projects Data
  getProjectsData() {
    this.pagesService.getAllPages().subscribe((res: any) => {
      this.content = res.data.finance
    }, ((error: any) => {
      console.log(error)
    }))
  }

}
