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
        'Portfolio Vianney Accart',
        "Site vitrine",
        'HTML / CSS / TypeScript / Angular',
        'https://images.pexels.com/photos/10137509/pexels-photo-10137509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://vianneyaccart.com/',
        "Après une première version réalisée avec HTML, CSS, JavaScript et PHP, cette nouvelle version apporte un nouveau design et de nouvelles technologies. Il a été réalisé avec HTML, CSS, TypeScript et le framework Angular. Bootstrap a également été utilisé."
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
        'Prune Manciet Ostéopathe',
        'Site vitrine - Cabinet d\'ostéopathie',
        'WordPress',
        'https://images.pexels.com/photos/10137509/pexels-photo-10137509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://prunemanciet-osteopathe.fr',
        `Ce site vitrine est ma première réalisation. Je l'ai créé pour une ostéopathe qui cherchait à développer sa patientèle sur le bassin Berjallien en Isère. Pour cela, le site a été construit dans un profond respect des critères SEO ce qui a rapidement permis de le positionner dans les résultats de recherche.`
      ),
      new Project(
        'Esprit Body',
        "Site vitrine - Coach sportif",
        'WordPress',
        'https://images.pexels.com/photos/10137509/pexels-photo-10137509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://espritbody.fr/',
        "Esprit Body est un site au thème sombre, réalisé au lancement de l'entreprise. Les objectifs étaient d'être présent en ligne, de promouvoir les offres de coaching et développer la clientèle. Un travail du SEO a été effectué, permettant de référencer le site sur des requêtes liées à des villes en plus des mots-clés liés à l'activité."
      ),
      new Project(
        'Serwan Messe Etiopathe',
        "Site vitrine - Cabinet d'étiopathie",
        'WordPress',
        'https://images.pexels.com/photos/10137509/pexels-photo-10137509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://serwanmesse-etiopathe.fr/',
        "Ce site a été réalisé dans le but de développer la patientèle d'un étiopathe et avoir une présence en ligne. Initialement, le site était travaillé pour le cabinet de Bourgoin-Jallieu, puis il a évolué pour présenter en plus le cabinet de Voiron. Un travail du SEO lié à l'activité et aux deux communes a été réalisé."
      ),
      new Project(
        'Association ADEIR',
        "Site vitrine - Site associatif",
        'WordPress',
        'https://images.pexels.com/photos/10137509/pexels-photo-10137509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://www.adeir.fr/',
        "J'ai réalisé ce projet le cadre de la refonte du site internet de l'association ADEIR que j'ai eu le plaisir d'animer de 2018 à 2020. L'objectif était d'apporter un touche plus moderne au site, et de faciliter la navigation. Une partie est dédiée au événements passés et à venir, qui est gérée par l'animateur actuel de l'association."
      ),
      new Project(
        'Blog Enbasdemarue',
        "Site vitrine lié à une marketplace",
        'WordPress',
        'https://images.pexels.com/photos/10137509/pexels-photo-10137509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://www.blog.enbasdemarue.fr/',
        "Ce blog a été créé pour présenter la marketplace Enbasdemarue. L'objectif était d'apporter des informations sur le fonctionnement de la marketplace, des tutoriels pour les adhérents et une partie blog avec les actualités. Un travail du SEO a été effectué. Une partie marketing a été mise en place avec une gestion automatisée d'envoi de mails. Le site n'est plus géré par mes soins."
      )
    );
  }
}
