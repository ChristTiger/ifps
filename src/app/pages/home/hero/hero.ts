import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [RouterLink, RouterLinkActive],
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
    feature1: "Nos formateurs experts allient expérience et innovation pour votre réussite.",
    feature2: "Décrochez un certificat professionnel d’État : un vrai atout pour votre carrière et de belles opportunités.",
    feature3: "Nos diplômés sont très recherchés grâce à la qualité de la formation et notre réseau industriel. Rejoignez notre communauté et profitez d’un accompagnement personnalisé."
  };

}
