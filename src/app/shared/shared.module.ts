import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NopageComponent } from './nopage/nopage.component';
import { HeaderComponent } from './header/header.component';
import { CategoriasComponent } from '../components/categorias/categorias.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations : [
      FooterComponent,
      NopageComponent,
      HeaderComponent,
      CategoriasComponent
  ],
  exports: [
    FooterComponent,
    NopageComponent,
    HeaderComponent,
    CategoriasComponent
  ]
})
export class SharedModule { }
