import { Component, OnInit } from '@angular/core';
import { Supplier } from '../../models/supplier.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplierService } from '../../services/supplier.service';

@Component({
  selector: 'app-suppliers-details',
  imports: [],
  templateUrl: './suppliers-details.component.html',
  styleUrl: './suppliers-details.component.css'
})
export class SuppliersDetailsComponent implements OnInit {
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
