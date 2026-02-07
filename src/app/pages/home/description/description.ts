import { Component } from '@angular/core';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [],
  templateUrl: './description.html',
  styleUrl: './description.css',
})
export class Description {
  // Vous pouvez ajouter des données dynamiques ici si nécessaire
  
  stats = [
    {
      value: '25+',
      label: 'Formations Certifiées',
      type: 'number'
    },
    {
      icon: '/icons8-diplôme-1-48.png',
      label: 'Certifications Officielles',
      type: 'icon'
    },
    {
      icon: '/icons8-circuit-50.png',
      label: 'Formations Pratiques',
      type: 'icon'
    },
    {
      icon: '/icons8-expert-50.png',
      label: 'Experts Formateurs',
      type: 'icon'
    }
  ];

  aboutData = {
    badge: 'QUI SOMMES-NOUS ?',
    title: {
      line1: 'Un établissement reconnu',
      line2: 'pour son excellence'
    },
    description1: "L'Institut de Formation Professionnelle « Le Succès » (IFPS) est un établissement reconnu par le Ministère de l'Emploi et de la Formation Professionnelle du Cameroun selon l'arrêté ministériel N°006550/MINEFOP/SG/DFOP/DSGSF/CSACD/CBACN du 28 septembre 2023.",
    description2: "Depuis sa création, l'IFPS forme des centaines de jeunes aux métiers techniques, paramédicaux et de gestion, en répondant aux besoins croissants du marché de l'emploi local et international. Notre mission est de fournir une formation de qualité, pratique et adaptée aux exigences du marché, afin de garantir l'employabilité de nos diplômés.",
    image: '/etudiant.png',
    imageAlt: 'Étudiants et formateurs en kinésithérapie / paramédical',
    badge2: {
      value: '+1000',
      label: 'Jeunes formés'
    },
    ctaText: 'Découvrir nos formations',
    ctaLink: '#formations'
  };
}