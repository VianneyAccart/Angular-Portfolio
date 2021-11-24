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
}
