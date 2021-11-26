import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  portfolios = [
    { src: '../../../../assets/img/1.png' },
    { src: '../../../../assets/img/2.png' },
    { src: '../../../../assets/img/3.png' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
