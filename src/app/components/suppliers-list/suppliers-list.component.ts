import { Component, OnInit } from '@angular/core';
import { Supplier } from '../../models/supplier.interface';
import { SupplierService } from '../../services/supplier.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-suppliers-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './suppliers-list.component.html',
  styleUrl: './suppliers-list.component.css'
})
export class SuppliersListComponent implements OnInit {
  suppliers: Supplier[] = [];
  constructor(
    private supplierService: SupplierService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.suppliers = this.supplierService.getSuppliers();
  }

  viewSupplierDetails(id: number): void{
    this.router.navigate(['/suppliers', id]);
  }

}
