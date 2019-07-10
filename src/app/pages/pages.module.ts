import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';

@NgModule({
  declarations: [

  ],
  exports: [

  ],
  imports: [
    CommonModule,
    SharedModule,
    PAGES_ROUTES

  ]
})
export class PagesModule { }
