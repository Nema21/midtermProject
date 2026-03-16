import { Routes } from '@angular/router';
import { SuppliersListComponent } from './components/suppliers-list/suppliers-list.component';
import { SupplierDetailsComponent } from './components/suppliers-details/suppliers-details.component';

export const routes: Routes = [
  {
    path: 'suppliers',
    component: SuppliersListComponent,
    children: [
      {
        path: ':id',
        children: [
          {
            path: 'details',
            component: SupplierDetailsComponent
          }
        ]
      }
    ]
  }
];