import { Component, OnInit } from '@angular/core';
import { Project } from '../shared/models/Project.model';

@Component({
  selector: 'app-realisations',
  templateUrl: './realisations.component.html',
  styleUrls: ['./realisations.component.css'],
})
export class RealisationsComponent implements OnInit {
  realisations: Project[];

  constructor() {
    this.realisations = new Array();
  }

  ngOnInit(): void {
    this.realisations.push(
      new Project(
        "Rock'Quest",
        'HTML / CSS / JavaScript',
        'https://images.pexels.com/photos/10137509/pexels-photo-10137509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://rockquest.netlify.app'
      ),
      new Project(
        'Prune Manciet Ostéopathe',
        'WordPress',
        'https://images.pexels.com/photos/10137509/pexels-photo-10137509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://prunemanciet-osteopathe.fr'
      ),
      new Project(
        "Rock'Quest",
        'HTML / CSS / JavaScript',
        'https://images.pexels.com/photos/10137509/pexels-photo-10137509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://rockquest.netlify.app'
      ),
      new Project(
        'Prune Manciet Ostéopathe',
        'WordPress',
        'https://images.pexels.com/photos/10137509/pexels-photo-10137509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://prunemanciet-osteopathe.fr'
      )
    );
  }
}
