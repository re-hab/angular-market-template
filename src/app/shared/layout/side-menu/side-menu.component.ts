import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  @Output() showMenu: EventEmitter<boolean> = new EventEmitter<boolean>();
  body: any;

  constructor() { }

  ngOnInit(): void {
    this.body = document.body;
    this.body.style.overflow = "hidden";
  }

  hideSideMenu(){
    this.showMenu.emit(false);
  }
  ngOnDestroy(){
    this.body.style.overflow = "scroll";
  }

}
