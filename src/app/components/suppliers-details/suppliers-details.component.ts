import { Component, OnInit } from '@angular/core';
import { Supplier } from '../../models/supplier.interface';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { SupplierService } from '../../services/supplier.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-suppliers-details',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './suppliers-details.component.html',
  styleUrl: './suppliers-details.component.css'
})
export class SupplierDetailsComponent implements OnInit {
  supplier: Supplier | undefined;
  supplierId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private supplierSevices: SupplierService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.supplierId = +params['id'];
      this.supplier = this.supplierSevices.getSupplierById(this.supplierId);
    });
  }

  saveChanges():void{
    if (this.supplier){
      this.supplierSevices.updateSupplier(this.supplier);
    }
  }

  goBack(): void{
    this.router.navigate(['/suppliers']);
  }

}
