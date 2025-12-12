import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme: 'light' | 'dark' = 'light';
  private currentColor: string = 'indigo';

  constructor() {}

  initTheme() {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const savedColor = localStorage.getItem('color') || 'indigo';
    
    if (savedTheme) {
      this.setTheme(savedTheme);
    }
    this.setColor(savedColor);
  }

  setTheme(theme: 'light' | 'dark') {
    this.currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  toggleTheme() {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  getTheme(): 'light' | 'dark' {
    return this.currentTheme;
  }

  setColor(color: string) {
    this.currentColor = color;
    const colors: { [key: string]: string } = {
      indigo: '#6366f1',
      purple: '#8b5cf6',
      pink: '#ec4899',
      blue: '#3b82f6',
      green: '#10b981',
      orange: '#f59e0b'
    };
    
    document.documentElement.style.setProperty('--primary-color', colors[color] || colors['indigo']);
    localStorage.setItem('color', color);
  }

  getColor(): string {
    return this.currentColor;
  }
}

