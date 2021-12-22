import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  hamClick: any;

  navLink: any = [
    {
      name: "Finance",
      link: "/finance",
      subLinks: []
    },
    {
      name: "Projects",
      link: "/projects",
      subLinks: []
    },
    {
      name: "Investments",
      link: "/investments",
      subLinks: []
    },
    {
      name: "About Us",
      link: "/about",
      subLinks: [
        { name: "Our Mission and Vision" },
        { name: "Board of Directors" },
        { name: "Management" }
      ]
    },
    {
      name: "Contact",
      link: "/contact",
      subLinks: []
    }
  ]

  constructor() { }

  ngOnInit(): void {
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
