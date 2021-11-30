import { Component, Input } from '@angular/core';
import { Project } from '../shared/models/Project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent {
  // Get project list from parent (realisations.component)
  @Input() project: Project | undefined;
  openedMoreDetails: boolean;

  constructor() {
    this.openedMoreDetails = false;
  }

  // Show/Hide more details on each project
  moreDetails() {
    this.openedMoreDetails = !this.openedMoreDetails;
  }
}
