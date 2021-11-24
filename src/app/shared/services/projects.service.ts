import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/Project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private httpClient: HttpClient) { }

  // Get projects from projects.json
  getProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>('assets/projects.json');
  }

  // Filter projects by used technologies
  filterProjectsByTechno(techno: string, projects: Project[]) {
    const filteredProjects: Project[] = new Array();
    // If techno is equal to 'All', all projects must be displayed
    if (techno === 'All') return projects;
    projects.forEach(project => {
      // If a project includes the right technology keyword (= techno), put its into filteredProjects
      if (project.languages.includes(techno)) filteredProjects.push(project)
    });
    return filteredProjects;
  }
}
