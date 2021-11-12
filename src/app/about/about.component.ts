import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  portrait: string;
  curriculum: string;

  constructor() {
    this.portrait = '/assets/img/portrait-vianney-accart.png';
    this.curriculum =
      '/assets/download/cv-vianney-accart-developpeur-web-full-stack.pdf';
  }
}
