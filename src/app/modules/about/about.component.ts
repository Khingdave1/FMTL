import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  isActive: boolean = true;
  bgImage = 'url("assets/img/about/Rectangle31.png")';


  constructor() { }

  ngOnInit(): void {
  }

}
