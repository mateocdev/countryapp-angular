import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    SideBarComponent,
    ContactPageComponent,
    SearchBoxComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HomePageComponent,
    AboutPageComponent,
    SideBarComponent,
    ContactPageComponent,
    SearchBoxComponent,
  ],
})
export class SharedModule {}
