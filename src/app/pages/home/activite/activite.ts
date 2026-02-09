import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

export interface TrainingDomain {
  id: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  link: string;
  color: string;
  badge: string;
  badgeColor: string;
}

@Component({
  selector: 'app-activite',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './activite.html',
  styleUrl: './activite.css',
})
export class Activite {
  
  // Titre de la section
  sectionTitle = 'Nos Domaines de Formation';
  sectionSubtitle = 'Choisissez votre voie parmi nos trois pôles d\'expertise majeurs conçus pour votre réussite.';

  // Données des domaines de formation
  trainingDomains: TrainingDomain[] = [
    {
      id: 1,
      title: 'Formations Techniques',
      description: 'Pilotez des machines d\'exception et accédez aux métiers techniques les plus demandés et les mieux rémunérés du moment.',
      image: '/assets/engins/reach-stacker.jpg',
      imageAlt: 'Engin lourd sur chantier',
      link: '/formations-techniques',
      color: '#FDB913',
      badge: 'POPULAIRE',
      badgeColor: 'bg-[#FDB913]'
    },
    {
      id: 2,
      title: 'Formations Paramédicales',
      description: 'Apportez du soin, sauvez des vies, gérez avec rigueur – devenez un pilier incontournable du système de santé.',
      image: '/assets/medical/medecin-d-aide-humanitaire-en-afrique-prenant-soin-d-un-patient.jpg',
      imageAlt: 'Soins médicaux',
      link: '/formations-paramedicales',
      color: '#B83A3A',
      badge: 'ESSENTIEL',
      badgeColor: 'bg-[#B83A3A]'
    },
    {
      id: 3,
      title: 'Gestion & Informatique',
      description: 'Pilotez la transformation numérique des entreprises et maîtrisez les outils qui redessinent le monde professionnel.',
      image: '/assets/gestion/le-personnel-informatique-du-hub-serveur-debogage-et-optimise-le-code.jpg',
      imageAlt: 'Équipe en salle informatique',
      link: '/formations-gestion-informatique',
      color: '#3B82F6',
      badge: 'INNOVATION',
      badgeColor: 'bg-blue-600'
    }
  ];

  // CTA de la section
  ctaText = 'Vous hésitez encore ? Parlons de votre projet professionnel.';
  ctaButtonText = 'Demander un conseil gratuit';
  ctaLink = '/contact';

  constructor() {}

  // Méthode pour naviguer vers une formation (peut être utilisée avec le Router)
  navigateToTraining(link: string): void {
    console.log('Navigation vers:', link);
    // Implémentation avec Angular Router si nécessaire
    // this.router.navigate([link]);
  }

  // Méthode pour tracker les clics (Analytics)
  trackClick(domainTitle: string): void {
    console.log('Clic sur:', domainTitle);
    // Implémentation Analytics si nécessaire
    // this.analytics.trackEvent('training_domain_click', { domain: domainTitle });
  }
}