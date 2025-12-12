import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhoneService } from '../../services/phone.service';
import { Phone } from '../../models/phone';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  featuredPhones: Phone[] = [];
  loading = true;

  constructor(
    private phoneService: PhoneService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadFeaturedPhones();
  }

  loadFeaturedPhones() {
    this.phoneService.getPhones().subscribe({
      next: (phones) => {
        this.featuredPhones = phones.slice(0, 6);
        this.loading = false;
      },
      error: () => {
        // Fallback to mock data if API fails
        this.featuredPhones = this.phoneService.getMockPhones().slice(0, 6);
        this.loading = false;
      }
    });
  }

  viewProduct(id: number) {
    this.router.navigate(['/product', id]);
  }

  viewAllProducts() {
    this.router.navigate(['/products']);
  }
}

