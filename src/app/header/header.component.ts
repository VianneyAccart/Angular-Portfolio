import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  openedMobileMenu: boolean;
  imageSource: string;

  constructor() {
    this.openedMobileMenu = false;
    this.imageSource = './assets/img/portrait-vianney-rond-nobg.png';
  }

  // Permet d'ouvrir et de fermer le menu burger sur mobile
  mobileMenu() {
    this.openedMobileMenu = !this.openedMobileMenu;
  }
}
