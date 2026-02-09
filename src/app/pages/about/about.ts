import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Header } from "../../share/header/header";
import { Footer } from "../../share/footer/footer";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    Header,
    Footer
  ],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit {

  pageTitle = 'À Propos de l\'IFPS "Le Succès"';

  heroData = {
    badge: 'À propos de l\'IFPS',
    title: 'Institut de Formation Professionnelle "Le Succès"',
    subtitle: 'Votre partenaire de confiance pour une formation professionnelle de qualité et une insertion réussie sur le marché de l\'emploi camerounais.',
    stats: [
      { value: '25+', label: 'Formations' },
      { value: '+1000', label: 'Diplômés' },
      { value: '3', label: 'Domaines' },
      { value: '100%', label: 'Reconnus' }
    ]
  };

  presentation = {
    badge: 'Notre Histoire',
    title: 'Un Centre de Formation de Référence à Douala',
    paragraphs: [
      'L\'Institut de Formation Professionnelle "Le Succès" (IFPS) est un établissement reconnu officiellement par le Ministère de l\'Emploi et de la Formation Professionnelle du Cameroun.',
      'Depuis notre création, nous formons des centaines de jeunes aux métiers techniques, paramédicaux et de gestion, en répondant aux besoins croissants du marché de l\'emploi local et international.',
      'Notre engagement : Fournir une formation de qualité, pratique et adaptée aux exigences du marché pour garantir l\'employabilité de nos diplômés.'
    ],
    ministerialDecree: {
      number: 'N°006550/MINEFOP/SG/DFOP/DSGSF/CSACD/CBACN',
      date: '28 septembre 2023'
    },
    image: '/etudiant.png',
    badgeValue: '+1000',
    badgeLabel: 'Jeunes Formés'
  };

  missionVision = {
    mission: {
      title: 'Notre Mission',
      icon: 'shield-check',
      description: 'Fournir une formation de qualité, pratique et adaptée aux exigences du marché de l\'emploi, afin de garantir l\'employabilité et l\'insertion professionnelle réussie de nos diplômés dans les secteurs techniques, paramédicaux et de gestion.',
      tags: ['Excellence', 'Pratique', 'Employabilité']
    },
    vision: {
      title: 'Notre Vision',
      icon: 'eye',
      description: 'Devenir le centre de formation professionnelle de référence à Douala et au Cameroun, reconnu pour l\'excellence de ses formations, la compétence de ses diplômés et son impact positif sur le développement socio-économique du pays.',
      tags: ['Leadership', 'Innovation', 'Impact']
    }
  };

  domains = [
    {
      title: 'Formations Techniques',
      badge: '8 Formations',
      badgeColor: 'bg-[#FDB913]',
      description: 'Conduite d\'engins lourds : Pelle excavatrice, Bulldozer, Reach Stacker, Tractopelle, Grues,...',
      image: '/assets/engins/reach-stacker.jpg',
      link: '/formationstechniques',
      color: '#FDB913'
    },
    {
      title: 'Formations Paramédicales',
      badge: '7 Formations',
      badgeColor: 'bg-[#B83A3A]',
      description: 'Auxiliaire de vie, Délégué médical, Soins infirmiers, Technicien de laboratoire, Assistance en cabinet médical...',
      image: '/assets/medical/medecin-d-aide-humanitaire-en-afrique-prenant-soin-d-un-patient.jpg',
      link: '/formationparamedicale',
      color: '#B83A3A'
    },
    {
      title: 'Gestion & Informatique',
      badge: '10+ Formations',
      badgeColor: 'bg-blue-600',
      description: 'Secrétariat, Comptabilité, Douane et transit, Maintenance informatique, Développement web, Marketing digital...',
      image: '/assets/gestion/le-personnel-informatique-du-hub-serveur-debogage-et-optimise-le-code.jpg',
      link: '/formationgestion',
      color: '#3B82F6'
    }
  ];

  accreditation = {
    title: 'Agrément Officiel',
    subtitle: 'Reconnu par le MINEFOP',
    decree: {
      label: 'Arrêté Ministériel',
      number: 'N°006550/MINEFOP/SG/DFOP/DSGSF/CSACD/CBACN',
      date: '📅 Délivré le 28 septembre 2023'
    },
    description: 'L\'IFPS "Le Succès" est officiellement reconnu et agréé par le Ministère de l\'Emploi et de la Formation Professionnelle du Cameroun, garantissant la qualité et la reconnaissance de nos formations sur le marché de l\'emploi.'
  };

  diplomas = [
    { acronym: 'AQP', name: 'Attestation de Qualification Professionnelle', color: 'green', borderColor: 'border-green-500', bgGradient: 'from-green-400 to-green-600' },
    { acronym: 'CQP', name: 'Certificat de Qualification Professionnelle', color: 'blue', borderColor: 'border-blue-600', bgGradient: 'from-blue-500 to-blue-700' },
    { acronym: 'DQP', name: 'Diplôme de Qualification Professionnelle', color: 'purple', borderColor: 'border-purple-600', bgGradient: 'from-purple-500 to-purple-700' }
  ];

  extraFormations = [
    {
      title: 'Cours de Langue Anglaise',
      description: 'Perfectionnez votre anglais professionnel et améliorez votre employabilité sur le marché international.',
      bgGradient: 'from-indigo-50 to-blue-50',
      borderColor: 'border-indigo-100',
      hoverBorder: 'hover:border-indigo-300',
      iconBg: 'from-indigo-500 to-indigo-700'
    },
    {
      title: 'Auto-école',
      description: 'Formation complète au code de la route et à la conduite pour obtenir votre permis de conduire.',
      bgGradient: 'from-red-50 to-orange-50',
      borderColor: 'border-red-100',
      hoverBorder: 'hover:border-red-300',
      iconBg: 'from-red-500 to-red-700'
    }
  ];

  ctaData = {
    title: 'Prêt à Transformer Votre Avenir ?',
    description: 'Rejoignez l\'IFPS "Le Succès" et faites partie des centaines de jeunes qui réussissent leur insertion professionnelle chaque année.',
    buttons: [
      { text: 'S\'inscrire Maintenant', link: '/contact', primary: true },
      { text: 'Découvrir les Formations', link: '/formations', primary: false }
    ],
    rentree: {
      date: '05 Janvier 2026',
      note: 'Les inscriptions sont ouvertes !'
    }
  };

  contactInfo = {
    phones: ['+237 679 40 98 53', '+237 656 08 14 67'],
    address: 'Douala, Marché Dakar (Maeture), Cameroun',
    email: 'contact@ifpslesucces.com'
  };

  constructor() {}

  ngOnInit(): void {
    this.initScrollAnimations();
  }

  initScrollAnimations(): void {
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    document.querySelectorAll('[data-aos]').forEach(el => observer.observe(el));
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}