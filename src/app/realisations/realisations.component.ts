import { Component, OnInit } from '@angular/core';
import { Project } from '../shared/models/Project.model';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-realisations',
  templateUrl: './realisations.component.html',
  styleUrls: ['./realisations.component.css'],
})
export class RealisationsComponent implements OnInit {
  projects: Project[];
  github: string;

  constructor(private projectsService: ProjectsService) {
    this.projects = new Array();
    this.github =
      "https://github.com/VianneyAccart";
  }

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe((response) => {
      this.projects = response;
    })
  }
}
