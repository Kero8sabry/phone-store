import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService, CartItem } from '../../services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems$: Observable<CartItem[]>;
  cartItems: CartItem[] = [];
  totalPrice = 0;

  constructor(
    private cartService: CartService,
    private router: Router
  ) {
    this.cartItems$ = this.cartService.getCart();
  }

  ngOnInit() {
    this.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.totalPrice = this.cartService.getTotalPrice();
    });
  }

  updateQuantity(phoneId: number, quantity: number) {
    this.cartService.updateQuantity(phoneId, quantity);
  }

  removeItem(phoneId: number) {
    this.cartService.removeFromCart(phoneId);
  }

  clearCart() {
    if (confirm('Are you sure you want to clear your cart?')) {
      this.cartService.clearCart();
    }
  }

  checkout() {
    alert('Thank you for your purchase! This is a demo store.');
    this.cartService.clearCart();
    this.router.navigate(['/']);
  }

  continueShopping() {
    this.router.navigate(['/products']);
  }
}

