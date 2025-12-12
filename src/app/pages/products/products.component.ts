import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhoneService } from '../../services/phone.service';
import { Phone } from '../../models/phone';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  phones: Phone[] = [];
  filteredPhones: Phone[] = [];
  loading = true;
  searchTerm = '';
  selectedBrand = 'all';
  selectedSort = 'default';
  brands: string[] = [];

  constructor(
    private phoneService: PhoneService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadPhones();
  }

  loadPhones() {
    this.phoneService.getPhones().subscribe({
      next: (phones) => {
        this.phones = phones;
        this.filteredPhones = phones;
        this.extractBrands();
        this.loading = false;
      },
      error: () => {
        this.phones = this.phoneService.getMockPhones();
        this.filteredPhones = this.phones;
        this.extractBrands();
        this.loading = false;
      }
    });
  }

  extractBrands() {
    this.brands = [...new Set(this.phones.map(p => p.brand))].sort();
  }

  filterPhones() {
    let filtered = [...this.phones];

    // Filter by search term
    if (this.searchTerm) {
      filtered = filtered.filter(phone =>
        phone.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        phone.brand.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    // Filter by brand
    if (this.selectedBrand !== 'all') {
      filtered = filtered.filter(phone => phone.brand === this.selectedBrand);
    }

    // Sort
    switch (this.selectedSort) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    this.filteredPhones = filtered;
  }

  viewProduct(id: number) {
    this.router.navigate(['/product', id]);
  }

  onSearchChange() {
    this.filterPhones();
  }

  onBrandChange() {
    this.filterPhones();
  }

  onSortChange() {
    this.filterPhones();
  }
}

