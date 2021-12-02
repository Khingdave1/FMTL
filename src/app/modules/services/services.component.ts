import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  isActive: boolean = true;
  bgImage = 'url("assets/img/services/Rectangle31.png")';

  constructor() { }

  ngOnInit(): void {
  }

}
