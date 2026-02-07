import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface GalleryItem {
  id: number;
  category: 'all' | 'technique' | 'paramedicale' | 'gestion-it';
  imageUrl: string;
  alt: string;
}

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {

  titre = 'Galerie des Étudiants IFPS';
  sousTitre = 'Découvrez la vie à l’IFPS : apprentissage pratique, entraide et passion pour les métiers de demain dans nos formations techniques, paramédicales et gestion/informatique.';

  filtreActif: string = 'all';

  // 12 images réparties (remplace les URLs par tes assets locaux si besoin)
  photos: GalleryItem[] = [
    { id: 1, category: 'technique', imageUrl: 'https://www.realskillztraininginstitute.co.za/wp-content/uploads/2025/02/Heavy-machinery.webp', alt: 'Étudiants en formation conduite d’engins lourds' },
    { id: 2, category: 'technique', imageUrl: 'https://www.realskillzacademy.co.za/wp-content/uploads/2025/02/heavy-machine.webp', alt: 'Pratique sur excavatrice et chargeuse' },
    { id: 3, category: 'technique', imageUrl: 'https://bakerti.org/wp-content/uploads/2020/06/fc6bb80eff3497a51b6fc6e058bf13d8.jpg', alt: 'Groupe en formation engins de chantier' },
    { id: 4, category: 'technique', imageUrl: 'https://english.news.cn/20230126/9ddb949d81d441a5bfca9fd8cf25c719/202301269ddb949d81d441a5bfca9fd8cf25c719_9a3d8d85-5e62-48f0-a467-f198205f4fe0.jpg', alt: 'Apprentissage technique en atelier' },

    { id: 5, category: 'paramedicale', imageUrl: 'https://www.davidsondavie.edu/wp-content/uploads/2014/11/NursingAssistantI.png', alt: 'Étudiants en mesure de tension artérielle' },
    { id: 6, category: 'paramedicale', imageUrl: 'https://c8.alamy.com/comp/2XA4641/nurse-taking-a-patients-blood-pressure-2XA4641.jpg', alt: 'Pratique soins infirmiers' },
    { id: 7, category: 'paramedicale', imageUrl: 'http://asec-sldi.org/contentAsset/image/c47e4431-2d43-4533-930f-b84bfebe4691/binaryImage2/filter/Resize,Jpeg/jpeg_q/65/resize_w/825/v/c902a914-3dc6-4536-9ca7-ee5cc85fbc35/', alt: 'Formation paramédicale en groupe' },
    { id: 8, category: 'paramedicale', imageUrl: 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/TEALS-Female-Instructor-1596x720:VP2-859x540', alt: 'Simulation soins patients' },

    { id: 9, category: 'gestion-it', imageUrl: 'https://www.commonsense.org/sites/default/files/png/2020-12/teachers-essential-guide-to-coding-in-the-classroom-article.png', alt: 'Étudiants en salle informatique' },
    { id: 10, category: 'gestion-it', imageUrl: 'https://obamawhitehouse.archives.gov/sites/whitehouse.gov/files/POTUS_Code.jpg', alt: 'Cours de programmation et gestion' },
    { id: 11, category: 'gestion-it', imageUrl: 'https://africa-school-bucket3.s3.amazonaws.com/static/img/school/2022/02/10/dicameroon.jpg', alt: 'Formation IT au Cameroun' },
    { id: 12, category: 'gestion-it', imageUrl: 'https://media.cnn.com/api/v1/images/stellar/prod/1811453-crop.jpg?c=original', alt: 'Apprentissage digital et outils bureautiques' },
  ];

  get photosFiltrees(): GalleryItem[] {
    if (this.filtreActif === 'all') return this.photos;
    return this.photos.filter(p => p.category === this.filtreActif);
  }

  changerFiltre(categorie: string): void {
    this.filtreActif = categorie;
  }

  compter(categorie: string): number {
    if (categorie === 'all') return this.photos.length;
    return this.photos.filter(p => p.category === categorie).length;
  }

}
