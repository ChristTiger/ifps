import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from "../../share/footer/footer";
import { Header } from "../../share/header/header";

@Component({
  selector: 'app-formationtechnique',
  standalone: true,
  imports: [CommonModule, RouterLink, Footer, Header],
  templateUrl: './formationtechnique.html',
  styleUrl: './formationtechnique.css',
})
export class Formationtechnique {
// Hero data
  hero = {
    title: 'Formations Techniques',
    subtitle: 'Devenez expert en conduite d\'engins lourds et ouvrez-vous les portes des grands chantiers',
    cta: 'S\'inscrire',
    ctaLink: '/contact'
  };

  // Pourquoi choisir
  pourquoi = {
    title: 'Pourquoi choisir nos formations techniques ?',
    description: 'Le secteur du BTP et des travaux publics est en pleine expansion au Cameroun et en Afrique. Les conducteurs d\'engins qualifiés sont très recherchés sur les chantiers de construction, les mines, les carrières et les projets d\'infrastructure. Nos formations techniques vous garantissent une employabilité immédiate avec des compétences pratiques reconnues.'
  };

  // Liste des formations
  formations = [
    {
      title: 'Pelle Excavatrice',
      description: 'Maîtrisez la conduite et l\'utilisation de la pelle excavatrice pour les travaux de terrassement et d\'extraction.',
      points: [
        'Formation pratique sur chantier',
        'Maintenance de base',
        'Règles de sécurité'
      ]
    },
    {
      title: 'Bulldozer',
      description: 'Apprenez à conduire le bulldozer pour le nivellement, le déblaiement et les travaux de terrassement.',
      points: [
        'Techniques de nivellement',
        'Conduite sur terrain difficile',
        'Entretien préventif'
      ]
    },
    {
      title: 'Pelle Chargeuse',
      description: 'Formation complète sur la conduite de pelle chargeuse pour les opérations de chargement et déplacement.',
      points: [
        'Chargement de matériaux',
        'Manipulation précise',
        'Gestion de la charge'
      ]
    },
    {
      title: 'Reach Stacker',
      description: 'Spécialisez-vous dans la manipulation de conteneurs avec le reach stacker, équipement clé des ports et zones logistiques.',
      points: [
        'Manipulation de conteneurs',
        'Sécurité portuaire',
        'Optimisation logistique'
      ]
    },
    {
      title: 'Tractopelle',
      description: 'Maîtrisez le tractopelle, engin polyvalent combinant les fonctions de chargeur et de pelle.',
      points: [
        'Double fonctionnalité',
        'Travaux de voirie',
        'Excavation de tranchées'
      ]
    },
    {
      title: 'Grues',
      description: 'Formation spécialisée pour la conduite de grues mobiles et de levage, essentielles sur les grands chantiers.',
      points: [
        'Levage de charges lourdes',
        'Calcul de charge',
        'Sécurité renforcée'
      ]
    },
    {
      title: 'Niveleuse',
      description: 'Devenez expert en nivellement de terrain avec la niveleuse, équipement indispensable pour les routes.',
      points: [
        'Construction de routes',
        'Nivellement de précision',
        'Entretien routier'
      ]
    },
    {
      title: 'Compacteur',
      description: 'Apprenez à utiliser le compacteur pour les travaux de compactage de sols et de revêtements routiers.',
      points: [
        'Compactage de sol',
        'Travaux routiers',
        'Techniques de compactage'
      ]
    }
  ];

  // Modalités
  modalites = {
    title: 'Modalités de Formation',
    items: [
      {
        icon: '⏱️',
        title: 'Durée de Formation',
        description: 'Formation modulaire adaptée à chaque engin, allant de quelques semaines à plusieurs mois selon le niveau visé.'
      },
      {
        icon: '🎓',
        title: 'Certification',
        description: 'Certificat de qualification professionnelle reconnu par le Ministère de l\'Emploi et les entreprises du BTP.'
      },
      {
        icon: '📋',
        title: 'Prérequis',
        description: 'Niveau minimum BEPC/CAP. Aptitude physique. Permis de conduire catégorie B recommandé pour certains engins.'
      }
    ]
  };

  // Contenu de la formation
  contenu = {
    theorique: {
      title: 'Formation Théorique',
      icon: '📚',
      points: [
        'Technologie des engins',
        'Règles de sécurité sur chantier',
        'Lecture de plans',
        'Maintenance préventive',
        'Réglementation en vigueur'
      ]
    },
    pratique: {
      title: 'Formation Pratique',
      icon: '🔧',
      points: [
        'Conduite sur terrain d\'exercice',
        'Manipulation des commandes',
        'Travaux réels sur chantier',
        'Entretien de base',
        'Mise en situation professionnelle'
      ]
    }
  };

  // Débouchés
  debouches = {
    title: 'Débouchés Professionnels',
    description: 'Nos formations vous ouvrent les portes de nombreux secteurs d\'activité',
    items: [
      {
        icon: '🏗️',
        title: 'Secteur BTP',
        description: 'Entreprises de construction, promoteurs immobiliers, sociétés de génie civil'
      },
      {
        icon: '⛏️',
        title: 'Mines et Carrières',
        description: 'Sociétés d\'exploitation minière, carrières de granulats et de pierres'
      },
      {
        icon: '🛣️',
        title: 'Travaux Publics',
        description: 'Construction de routes, ponts, barrages et infrastructures publiques'
      },
      {
        icon: '🏭',
        title: 'Industrie et Logistique',
        description: 'Ports, zones industrielles, plateformes logistiques et entrepôts'
      }
    ]
  };

  // CTA final
  cta = {
    title: 'Prêt à Démarrer Votre Formation Technique ?',
    description: 'Inscrivez-vous dès maintenant pour la rentrée du 5 janvier 2026',
    link: '/contact'
  };
}
