import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhoneService } from '../../services/phone.service';
import { CartService } from '../../services/cart.service';
import { Phone } from '../../models/phone';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  phone: Phone | null = null;
  loading = true;
  quantity = 1;
  selectedImage = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private phoneService: PhoneService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadPhone(+id);
    }
  }

  loadPhone(id: number) {
    this.phoneService.getPhone(id).subscribe({
      next: (phone) => {
        this.phone = phone;
        this.selectedImage = phone.image;
        this.loading = false;
      },
      error: () => {
        // Fallback to mock data
        const phones = this.phoneService.getMockPhones();
        this.phone = phones.find(p => p.id === id) || null;
        if (this.phone) {
          this.selectedImage = this.phone.image;
        }
        this.loading = false;
      }
    });
  }

  addToCart() {
    if (this.phone) {
      this.cartService.addToCart(this.phone, this.quantity);
      alert(`${this.phone.name} added to cart!`);
    }
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  goBack() {
    this.router.navigate(['/products']);
  }
}

