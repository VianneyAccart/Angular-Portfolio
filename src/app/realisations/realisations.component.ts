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
        "Jeu de rythme",
        'HTML / CSS / JavaScript',
        'https://images.pexels.com/photos/10137509/pexels-photo-10137509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://rockquest.netlify.app',
        "Rock'Quest est un jeu dans le style de Guitar Hero. Il a été développé avec trois camarades, en deux semaines, à l'occasion du premier projet de groupe de ma formation à la Wild Code School pour lequel nous ne devions pas utiliser de framework. Rock'Quest est disponible sur mobile et desktop."
      ),
      new Project(
        'Prune Manciet Ostéopathe',
        'Site vitrine - Cabinet d\'ostéopathie',
        'WordPress',
        'https://images.pexels.com/photos/10137509/pexels-photo-10137509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://prunemanciet-osteopathe.fr',
        `Ce site vitrine est ma première réalisation. Je l'ai créé pour une ostéopathe qui cherchait à développer sa patientèle sur le bassin Berjallien en Isère. Pour cela, le site a été construit dans un profond respect des critères SEO ce qui a rapidement permis de le positionner dans les résultats de recherche.`
      ),
      new Project(
        "Guillaume Astruc Photography",
        "Vente de photographies en ligne",
        'WordPress / WooCommerce',
        'https://images.pexels.com/photos/10137509/pexels-photo-10137509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://www.guillaumeastrucphotography.com/',
        "Guillaume Astruc est un photographe professionnel qui souhaitait développer sa présence en ligne et commercialiser ses photographies. J'ai réalisé un site simple, épuré et performant. La partie transactionnelle est gérée par WooCommerce. Un travail du SEO OnSite a été réalisé."
      ),
      new Project(
        'Esprit Body',
        "Site vitrine - Coach sportif",
        'WordPress',
        'https://images.pexels.com/photos/10137509/pexels-photo-10137509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://espritbody.fr/',
        "Esprit Body est un site au thème sombre, réalisé au lancement de l'entreprise. Les objectifs étaient d'être présent en ligne, de promouvoir les offres de coaching et développer la clientèle. Un travail du SEO a été effectué, permettant de référencer le site sur des requêtes liées à des villes en plus des mots-clés liés à l'activité."
      )
    );
  }
}
