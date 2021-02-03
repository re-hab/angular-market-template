import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home.component';
import { SliderComponent } from './components/slider/slider.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MaterialModule} from './../../shared/material/material.module';
import { OffersComponent } from './components/offers/offers.component'


@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent,
    OffersComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SlickCarouselModule,
    MaterialModule
  ]
})
export class HomeModule { }
