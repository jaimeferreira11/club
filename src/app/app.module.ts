import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { PagesComponent } from './pages/pages.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './components/slider/slider.component';
import { PartnersComponent } from './components/partners/partners.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { TestimoniosComponent } from './components/testimonios/testimonios.component';
import { PlanesComponent } from './components/planes/planes.component';
import { ContadorComponent } from './components/contador/contador.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactoComponent } from './components/contacto/contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagesComponent,
    SliderComponent,
    PartnersComponent,
    GaleriaComponent,
    TestimoniosComponent,
    PlanesComponent,
    ContadorComponent,
    FaqComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
