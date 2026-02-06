import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  menuItems = ['Acceuil', 'A-propos', 'Formations Techniques', 'Formations Paramedicales', 'Formations Gestion/IT', 'Contact', 'CONTACT US'];

  adresses: adresse[] = [
    { image: '/icons8-adresse-50.png', nom: 'Addresse', value: 'Marché Dakar (Maeture), Douala-Cameroun' },
    { image: '/icons8-nouveau-message-50.png', nom: 'Email', value: 'contact@ifpslesucces.com' },
    { image: '/icons8-appel-au-carré-48.png', nom: 'Telephone', value: '(237)679-40-98-53/(237)656-08-14-67' }
  ];

}

export interface adresse {
  image: string;
  nom: string;
  value: string;
}
