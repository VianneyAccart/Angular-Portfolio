export class Project {
  projectName: string;
  projectType: string;
  usedTechnologies: string;
  projectImage: string;
  projectUrl: string;
  description: string;

  constructor(
    projectName: string,
    projectType: string,
    usedTechnologies: string,
    projectImage: string,
    projectUrl: string,
    description: string,
  ) {
    (this.projectName = projectName),
    (this.projectType = projectType),
      (this.usedTechnologies = usedTechnologies),
      (this.projectImage = projectImage),
      (this.projectUrl = projectUrl),
      (this.description = description);
  }
}
