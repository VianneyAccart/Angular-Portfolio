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
  mobileMenu(): void {
    this.openedMobileMenu = !this.openedMobileMenu;
  }

  // Permet de fermer le menu lors d'un clic sur un lien du menu
  closeMenu():void {
    this.openedMobileMenu = false;
  }
}
