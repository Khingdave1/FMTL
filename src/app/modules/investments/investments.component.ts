import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.css']
})
export class InvestmentsComponent implements OnInit {

  content: any;

  constructor(private pagesService: PagesService) { }

  ngOnInit(): void {
    // Get Pojects data
    this.getProjectsData()
  }

  // Get Projects Data
  getProjectsData() {
    this.pagesService.getAllPages().subscribe((res: any) => {
      this.content = res.data.investment
    }, ((error: any) => {
      console.log(error)
    }))
  }

}
