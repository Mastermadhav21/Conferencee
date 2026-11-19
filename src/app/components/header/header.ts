import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {

  isScrolled = false;

  activeSection = 'home';

  publications = [
    {
      name: 'Publication 1',
      route: '/publication-1'
    },
    {
      name: 'Publication 2',
      route: '/publication-2'
    }
  ];

  setActiveSection(section: string): void {
    this.activeSection = section;
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }
}