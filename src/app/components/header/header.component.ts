import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { CartService } from '../../services/cart.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartItemCount$: Observable<number>;
  isMenuOpen = false;

  constructor(
    public router: Router,
    public themeService: ThemeService,
    private cartService: CartService
  ) {
    this.cartItemCount$ = this.cartService.getCart().pipe(
      map(() => this.cartService.getTotalItems())
    );
  }

  ngOnInit() {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  setColor(color: string) {
    this.themeService.setColor(color);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  navigateToCart() {
    this.router.navigate(['/cart']);
    this.isMenuOpen = false;
  }
}

