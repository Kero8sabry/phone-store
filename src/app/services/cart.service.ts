import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Phone } from '../models/phone';

export interface CartItem {
  phone: Phone;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>([]);

  constructor() {
    this.loadCart();
  }

  getCart(): Observable<CartItem[]> {
    return this.cartSubject.asObservable();
  }

  addToCart(phone: Phone, quantity: number = 1) {
    const existingItem = this.cartItems.find(item => item.phone.id === phone.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cartItems.push({ phone, quantity });
    }
    
    this.saveCart();
    this.cartSubject.next([...this.cartItems]);
  }

  removeFromCart(phoneId: number) {
    this.cartItems = this.cartItems.filter(item => item.phone.id !== phoneId);
    this.saveCart();
    this.cartSubject.next([...this.cartItems]);
  }

  updateQuantity(phoneId: number, quantity: number) {
    const item = this.cartItems.find(item => item.phone.id === phoneId);
    if (item) {
      item.quantity = quantity;
      if (quantity <= 0) {
        this.removeFromCart(phoneId);
      } else {
        this.saveCart();
        this.cartSubject.next([...this.cartItems]);
      }
    }
  }

  clearCart() {
    this.cartItems = [];
    this.saveCart();
    this.cartSubject.next([]);
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (item.phone.price * item.quantity), 0);
  }

  getTotalItems(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  private saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  private loadCart() {
    const saved = localStorage.getItem('cart');
    if (saved) {
      this.cartItems = JSON.parse(saved);
      this.cartSubject.next([...this.cartItems]);
    }
  }
}

