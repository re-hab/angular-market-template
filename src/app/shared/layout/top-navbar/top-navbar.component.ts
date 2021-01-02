import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent implements OnInit {
  
  searchValue: string;
  matBadge: string;
  lang: string;
  showMenu: boolean;


  constructor() { }

  ngOnInit(): void {
    this.searchValue = '';
    this.showMenu = false;
    this.matBadge = "0";
    this.lang ='Ar'
  }
  showSideMenu() {
    this.showMenu = true;

  }
  hideSideMenu(e: boolean) {
    this.showMenu = e;
  }

}
