import { LandingRoutingModule } from './landing-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './containers/pages/home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, LandingRoutingModule]
})
export class LandingModule {}
