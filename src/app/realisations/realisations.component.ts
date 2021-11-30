import { Component } from '@angular/core';
import { Project } from '../shared/models/Project.model';
import { ProjectsService } from '../shared/services/projects.service';

@Component({
  selector: 'app-realisations',
  templateUrl: './realisations.component.html',
  styleUrls: ['./realisations.component.css'],
})
export class RealisationsComponent {
  projects: Project[]; // Projects list get from json
  projectsFilter: string; // Used to style selected filter button
  filteredProjects: Project[]; // Contains projects filtered by used techno

  constructor(private projectsService: ProjectsService) {
    this.projects = new Array();
    this.filteredProjects = new Array();
    // Get project data from projectsService
    this.projectsService.getProjects().subscribe((project: Project[]) => {
      this.projects = project;
      // By default, filteredProjects contains all projects
      this.filteredProjects = this.projects;
    });
    // By default, we need projectsFilter equal to 'All' because all projects are displayed
    this.projectsFilter = 'All';
  }

  // Filter projects on click thanks to button ID
  filterProjects(event: any) {
    this.projectsFilter = event.srcElement.id; // Selected filter button is styled
    this.filteredProjects = this.projectsService.filterProjectsByTechno(
      event.srcElement.id,
      this.projects
    );
  }
}
