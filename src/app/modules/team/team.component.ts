import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  isActive: boolean = true;
  bgImage = 'url("assets/img/team/Rectangle31.png")';

  // Board Members
  boardMembers = [
    {
      id: 0,
      image: '../../../assets/img/team/SALAMATU_ADERINOKUN.png',
      name: "Salamatu Aderinokun",
      role: "Chairman",
      twitter: "",
      instagram: "",
      facebook: ""
    },
    {
      id: 1,
      image: '../../../assets/img/team/default.png',
      name: "Mr. Akin akintoye l.l.b l.l.m",
      role: "Director",
      twitter: "",
      instagram: "",
      facebook: ""
    },
    {
      id: 2,
      image: '../../../assets/img/team/default.png',
      name: "Dr. Adeleke adedeji",
      role: "Director",
      twitter: "",
      instagram: "",
      facebook: ""
    },
    {
      id: 3,
      image: '../../../assets/img/team/BABATUNDE_WAHAB.png',
      name: "Babatunde Wahab Dabiri",
      role: "Director",
      twitter: "",
      instagram: "",
      facebook: ""
    },
    {
      id: 4,
      image: '../../../assets/img/team/AGENI_YUSUF.png',
      name: "Ageni Yusuf",
      role: "Director",
      twitter: "",
      instagram: "",
      facebook: ""
    },
    {
      id: 5,
      image: '../../../assets/img/team/BOLAJI_SHENJOBI.png',
      name: "Bolaji Shenjobi",
      role: "Director",
      twitter: "",
      instagram: "",
      facebook: ""
    },
    {
      id: 6,
      image: '../../../assets/img/team/EHIOSU_OVIAWE.png',
      name: "Ehiosu Oviawe",
      role: "Managing Director",
      twitter: "",
      instagram: "",
      facebook: ""
    },
    {
      id: 7,
      image: '../../../assets/img/team/OLUWOLE_AKALA.png',
      name: "Oluwole Akala",
      role: "Director",
      twitter: "",
      instagram: "",
      facebook: ""
    },
  ]

  // Management Members
  ManagementMembers = [
    {
      id: 0,
      image: '../../../assets/img/team/EHIOSU_OVIAWE.png',
      name: "Ehiosu Odaro Oviawe",
      role: "Managing Director",
      twitter: "",
      instagram: "",
      facebook: ""
    },
    {
      id: 1,
      image: '../../../assets/img/team/CHIDI_OKONTA.png',
      name: "Chidi Okonta",
      role: "Company Secetary",
      twitter: "",
      instagram: "",
      facebook: ""
    },
    {
      id: 2,
      image: '../../../assets/img/team/ANTHONY_ONYEOGHANE.png',
      name: "Anthony Onyeoghane",
      role: "Chief Risk Officer",
      twitter: "",
      instagram: "",
      facebook: ""
    },
    {
      id: 3,
      image: '../../../assets/img/team/DOTUN_SORETIRE.png',
      name: "Dotun Soretire",
      role: "Head, MIS/Accounts Department",
      twitter: "",
      instagram: "",
      facebook: ""
    },
    {
      id: 4,
      image: '../../../assets/img/team/YINKA_ODUWAIYE.png',
      name: "Yinka Oduwaiye",
      role: "Head, Operations",
      twitter: "",
      instagram: "",
      facebook: ""
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
