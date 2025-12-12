import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  currentTheme: 'light' | 'dark' = 'light';
  currentColor: string = 'indigo';
  colors = [
    { name: 'Indigo', value: 'indigo', hex: '#6366f1' },
    { name: 'Purple', value: 'purple', hex: '#8b5cf6' },
    { name: 'Pink', value: 'pink', hex: '#ec4899' },
    { name: 'Blue', value: 'blue', hex: '#3b82f6' },
    { name: 'Green', value: 'green', hex: '#10b981' },
    { name: 'Orange', value: 'orange', hex: '#f59e0b' }
  ];

  constructor(public themeService: ThemeService) {}

  ngOnInit() {
    this.currentTheme = this.themeService.getTheme();
    this.currentColor = this.themeService.getColor();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
    this.currentTheme = this.themeService.getTheme();
  }

  setColor(color: string) {
    this.themeService.setColor(color);
    this.currentColor = color;
  }
}

