import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  isActive: boolean = true;
  bgImage = 'url("assets/img/contact/Rectangle31.png")';

  constructor() { }

  ngOnInit(): void {
  }

}
