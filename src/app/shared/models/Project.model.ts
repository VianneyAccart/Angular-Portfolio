export class Project {
  projectName: string;
  usedTechnologies: string;
  projectImage: string;
  projectUrl: string;

  constructor(
    projectName: string,
    usedTechnologies: string,
    projectImage: string,
    projectUrl: string
  ) {
    (this.projectName = projectName),
      (this.usedTechnologies = usedTechnologies),
      (this.projectImage = projectImage),
      (this.projectUrl = projectUrl);
  }
}
