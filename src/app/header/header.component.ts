import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor() { }

  openedMobileMenu: boolean = false
  imageSource: string = "/src/assets/img/portrait-vianney-rond-nobg.png"
  
  mobileMenu() {
    this.openedMobileMenu = !this.openedMobileMenu
  }
}
