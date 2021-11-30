import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { CanonicalService } from './shared/services/canonical.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(private metaTagService: Meta, private canonicalService: CanonicalService){}

  ngOnInit() {
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Développeur web Lyon, Développeur Angular Lyon, Développeur Java Lyon' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Vianney Accart' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2021-11-30', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' }
    ]);
    this.canonicalService.setCanonicalURL();
  }
}
