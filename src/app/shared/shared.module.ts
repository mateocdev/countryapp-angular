import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SideBarComponent } from './pages/side-bar/side-bar.component';

@NgModule({
  declarations: [HomePageComponent, AboutPageComponent, SideBarComponent],
  imports: [CommonModule, RouterModule],
  exports: [HomePageComponent, AboutPageComponent, SideBarComponent],
})
export class SharedModule {}
