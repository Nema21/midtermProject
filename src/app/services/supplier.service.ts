import { Injectable } from '@angular/core';
import { Supplier } from '../models/supplier.interface';
// Make the service available throughout the entire app
@Injectable({
  providedIn: 'root'
})
export class SupplierService {
// Mock data array containing 10 diverse supplier objects
  private suppliers: Supplier[] = [
    {
      id: 1,
      supplierName: 'ABC Electronics',
      location: 'Manila',
      email: 'abc@email.com',
      contactPerson: 'Juan Dela Cruz',
      phone: '09123456789',
      productsSupplied: ['Laptop', 'Monitor']
    },
    {
      id: 2,
      supplierName: 'Global Tech',
      location: 'Cebu',
      email: 'global@email.com',
      contactPerson: 'Maria Santos',
      phone: '09234567890',
      productsSupplied: ['Smartphones', 'Tablets']
    },
    {
      id: 3,
      supplierName: 'Pacific Industrial Supply',
      location: 'Davao',
      email: 'pacific@industrial.com',
      contactPerson: 'Carlos Ramirez',
      phone: '09345678901',
      productsSupplied: ['Power Tools', 'Safety Equipment']
    },
    {
      id: 4,
      supplierName: 'Metro Hardware Trading',
      location: 'Quezon City',
      email: 'metrohardware@email.com',
      contactPerson: 'Ana Lopez',
      phone: '09456789012',
      productsSupplied: ['Construction Materials', 'Hand Tools']
    },
    {
      id: 5,
      supplierName: 'Prime Electrical Supplies',
      location: 'Makati',
      email: 'primeelectrical@email.com',
      contactPerson: 'Roberto Cruz',
      phone: '09567890123',
      productsSupplied: ['Cables', 'Circuit Breakers']
    },
    {
      id: 6,
      supplierName: 'Global Office Solutions',
      location: 'Pasig',
      email: 'globaloffice@email.com',
      contactPerson: 'Linda Torres',
      phone: '09678901234',
      productsSupplied: ['Printers', 'Office Equipment']
    },
    {
      id: 7,
      supplierName: 'TechSource Distributors',
      location: 'Taguig',
      email: 'techsource@email.com',
      contactPerson: 'Daniel Garcia',
      phone: '09789012345',
      productsSupplied: ['Computer Parts', 'Networking Devices']
    },
    {
      id: 8,
      supplierName: 'Northern Logistics Supply',
      location: 'Baguio',
      email: 'northernlogistics@email.com',
      contactPerson: 'Sofia Mendoza',
      phone: '09890123456',
      productsSupplied: ['Packaging Materials', 'Warehouse Tools']
    },
    {
      id: 9,
      supplierName: 'Southern Manufacturing Supply',
      location: 'Iloilo',
      email: 'southernmfg@email.com',
      contactPerson: 'Miguel Reyes',
      phone: '09901234567',
      productsSupplied: ['Machine Parts', 'Industrial Lubricants']
    },
    {
      id: 10,
      supplierName: 'Citywide Tech Supplies',
      location: 'Manila',
      email: 'citywidetech@email.com',
      contactPerson: 'Patricia Navarro',
      phone: '09111222333',
      productsSupplied: ['Routers', 'Switches', 'Cables']
    }
  ];

  constructor() {}
// Returns the complete list of suppliers for the table view
  getSuppliers(): Supplier[] {
    return this.suppliers;
  }

//  Finds a single supplier by their unique ID
  getSupplierById(id: number): Supplier | undefined {
    return this.suppliers.find(supplier => supplier.id === id);
  }

// Updates the data in the array when a user saves changes
  updateSupplier(updatedSupplier: Supplier): void {
    const index = this.suppliers.findIndex(
      supplier => supplier.id === updatedSupplier.id
    );
// If the supplier exists, overwrite their old data with the new data
    if (index !== -1) {
      this.suppliers[index] = updatedSupplier;
    }
  }

}