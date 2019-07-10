import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { NopageComponent } from './shared/nopage/nopage.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },

    { path: 'pages', component: PagesComponent,
  children: [

    ] },

    { path: '**', component: NopageComponent }

];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});
