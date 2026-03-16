import { Routes } from '@angular/router';
import { SuppliersListComponent } from './components/suppliers-list/suppliers-list.component';
import { SuppliersDetailsComponent } from './components/suppliers-details/suppliers-details.component';

export const routes: Routes = [
    {path: '', redirectTo:'/suppliers', pathMatch:'full'},
    {path:'suppliers', component: SuppliersListComponent},
    {path:'suppliers/:id', component: SuppliersDetailsComponent}
];
