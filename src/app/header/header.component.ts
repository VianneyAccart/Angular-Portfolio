import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  openedMobileMenu: boolean;

  constructor() {
    this.openedMobileMenu = false;
  }

  // Toggle between opened and closed mobile menu
  mobileMenu(): void {
    this.openedMobileMenu = !this.openedMobileMenu;
  }

  // Close mobile menu when user clicks on menu link
  closeMenu(): void {
    this.openedMobileMenu = false;
  }
}
