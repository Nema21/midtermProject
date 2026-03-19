import { Routes } from '@angular/router';
import { SuppliersListComponent } from './components/suppliers-list/suppliers-list.component';
import { SupplierDetailsComponent } from './components/suppliers-details/suppliers-details.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  // Route for the main landing/home page
  { path: 'home', component: HomeComponent },
  
  // Default route that redirects to the suppliers list when the app starts
  { path: '', redirectTo: 'suppliers', pathMatch: 'full' },
  
  // Route to display the full table of suppliers
  { path: 'suppliers', component: SuppliersListComponent },
  
  // Parameterized route (:id) to show details for a specific supplier
  { path: 'suppliers/:id', component: SupplierDetailsComponent }
];
