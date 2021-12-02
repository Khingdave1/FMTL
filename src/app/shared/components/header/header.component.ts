import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  hamClick: any;
  @Input() isActive: boolean;
  @Input() bgImage: string;
  bgImage1 = "../../../../assets/img/svg/logo.svg"

  constructor() { }

  ngOnInit(): void {

    console.log(this.bgImage)
  }


  // Open Menu
  openMenu() {
    this.hamClick = !this.hamClick
  }

  // Close Menu
  closeMenu() {
    this.hamClick = false
  }


}
