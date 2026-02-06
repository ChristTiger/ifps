import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  title = {
    line1: "Transformer votre passion en carrière",
    line2: "avec un certificat d'aptitude professionnelle"
  };
  content = "Rejoignez l'institut de référence à Douala. Avec plus de 25 formations pratiques et un accompagnement personnalisé, l'IFPS est le tremplin idéal pour maîtriser les métiers de l'industrie et de la santé. Votre succès commence ici.";
  description = {
    feature1: "Nos formateurs sont des experts, dédiés à votre réussite. Ils combinent une solide expérience professionnelle et innovante pour vous offrir une formation de qualité supérieure.",
    feature2: "Obtenez un certificat d'aptitude professionnelle reconnu par l'Etat. Ce diplôme est un atout précieux pour votre carrière, ouvrant des portes vers de nombreuses opportunités professionnelles.",
    feature3: "Nos diplômés sont très recherchés par les employeurs grâce à la qualité de notre formation et à notre réseau de partenaires industriels. Rejoignez une communauté de professionnels compétents et bénéficiez d'un accompagnement personnalisé."
  };

}
