import { RouterModule, Routes } from '@angular/router';
import { NopageComponent } from '../shared/nopage/nopage.component';


const pagesRoutes: Routes = [

    { path: '***', component: NopageComponent },


];


export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
