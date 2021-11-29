import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  title: string;

  constructor(private titleService: Title, private metaTagService: Meta) {
    this.title = "Vianney Accart, Développeur web et mobile full-stack à Lyon";
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag(
      { name: 'description', content: "Développeur d'applications web et mobile full-stack à Lyon. Je développe pour vous des solutions sur-mesure, adaptées à vos besoins et performantes. Découvrez mes réalisations et collaborons !" }
    );
  }
}
