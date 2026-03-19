import { Component, OnInit } from '@angular/core';
import { Supplier } from '../../models/supplier.interface';
import { SupplierService } from '../../services/supplier.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-suppliers-list',
  standalone: true,
  // CommonModule is needed for *ngFor in the HTML
  imports: [CommonModule, FormsModule], 
  templateUrl: './suppliers-list.component.html',
  styleUrl: './suppliers-list.component.css'
})
export class SuppliersListComponent implements OnInit {
  // Array to store the list of suppliers
  suppliers: Supplier[] = [];

  constructor(
    private supplierService: SupplierService, // Injects the data service
    private router: Router                      // Injects the router for switching pages
  ) {}

  // Runs when the component loads
  ngOnInit(): void {
    // Get all suppliers from the service
    this.suppliers = this.supplierService.getSuppliers();
  }

  // Navigates to the specific supplier's detail page using their ID
  viewSupplierDetails(id: number): void {
    this.router.navigate(['/suppliers', id]);
  }
}
