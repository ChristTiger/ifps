import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isMenuOpen = false;
  isFormationsTechniquesOpen = false;
  isFormationsParamedicalesOpen = false;
  isFormationsGestionOpen = false;

  menuItems = ['Acceuil', 'A-propos', 'Formations Techniques', 'Formations Paramedicales', 'Formations Gestion/IT', 'Contact', 'CONTACT US'];

  adresses: adresse[] = [
    { image: '/icons8-adresse-50.png', nom: 'Addresse', value: 'Marché Dakar (Maeture), Douala-Cameroun' },
    { image: '/icons8-nouveau-message-50.png', nom: 'Email', value: 'contact@ifpslesucces.com' },
    { image: '/icons8-appel-au-carré-48.png', nom: 'Telephone', value: '(237)679-40-98-53/(237)656-08-14-67' }
  ];

  private routeMap: Record<string, string> = {
    'Acceuil': '/home',
    'A-propos': '/about',
    'Formations Techniques': '/formationstechniques',
    'Formations Paramedicales': '/formationparamedicale',
    'Formations Gestion/IT': '/formationgestion',
    'Contact': '/contact',
    'CONTACT US': '/contact'
  };


  getRoute(item: string): string {
    return this.routeMap[item] || '/home'; // fallback
  }

  isSpecial(item: string): boolean {
    return item === 'CONTACT US';
  }

  isHome(item: string): boolean {
    return item === 'Acceuil';
  }


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleFormationsTechniques() {
    this.isFormationsTechniquesOpen = !this.isFormationsTechniquesOpen;
  }

  toggleFormationsParamedicales() {
    this.isFormationsParamedicalesOpen = !this.isFormationsParamedicalesOpen;
  }

  toggleFormationsGestion() {
    this.isFormationsGestionOpen = !this.isFormationsGestionOpen;
  }
}

export interface adresse {
  image: string;
  nom: string;
  value: string;
}
