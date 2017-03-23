import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ServicesComponent } from './services/services.component';
import { SecondOptionComponent } from './second-option/second-option.component';
import { HeroComponent } from './second-option/hero/hero.component';
import { Navbar2Component } from './second-option/navbar2/navbar2.component';
import { Services2Component } from './second-option/services2/services2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    FooterComponent,
    CarouselComponent,
    ServicesComponent,
    SecondOptionComponent,
    HeroComponent,
    Navbar2Component,
    Services2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
