import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { TopNavbarComponent } from './layout/top-navbar/top-navbar.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SideMenuComponent } from './layout/side-menu/side-menu.component';

@NgModule({
  declarations: [
  NavbarComponent,
  TopNavbarComponent,
  SideMenuComponent
],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
  ],
  exports: [
    MaterialModule,
    NavbarComponent,
    TopNavbarComponent
  ]
})
export class SharedModule { }
