import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Phone } from '../../models/phone';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-phone-card',
  templateUrl: './phone-card.component.html',
  styleUrls: ['./phone-card.component.scss']
})
export class PhoneCardComponent {
  @Input() phone!: Phone;

  constructor(
    private router: Router,
    private cartService: CartService
  ) {}

  viewDetails() {
    this.router.navigate(['/product', this.phone.id]);
  }

  addToCart(event: Event) {
    event.stopPropagation();
    this.cartService.addToCart(this.phone);
  }
}

