import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // For URL params and navigation
import { SupplierService } from '../../services/supplier.service'; // Data service
import { Supplier } from '../../models/supplier.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-suppliers-details',
  standalone: true,
  imports: [CommonModule, FormsModule], // Required for *ngIf and [(ngModel)]
  templateUrl: './suppliers-details.component.html',
  styleUrl: './suppliers-details.component.css'
})
export class SupplierDetailsComponent implements OnInit {
  supplier: Supplier | undefined;
  isEditMode: boolean = false;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private supplierService: SupplierService
  ) {}

  ngOnInit(): void {
    // Get the ID from the URL (/suppliers/:id)
    const id = +this.route.snapshot.params['id'];
    
    // Fetch the specific supplier from the service
    this.supplier = this.supplierService.getSupplierById(id);
  }

  toggleEdit(): void {
    this.isEditMode = !this.isEditMode;
  }

  // Save changes back to the service
  saveChanges(): void {
    if (this.supplier) {
      this.supplierService.updateSupplier(this.supplier);
      this.isEditMode = false;
      alert('Saved!');
      this.goBack();
    }
  }

  //Return to the list page
  goBack(): void {
    this.router.navigate(['/suppliers']);
  }
}
