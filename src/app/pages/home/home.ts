import { Component } from '@angular/core';
import { Header } from "../../share/header/header";
import { Hero } from "./hero/hero";
import { Footer } from "../../share/footer/footer";
import { Description } from "./description/description";
import { Activite } from "./activite/activite";
import { Gallery } from "./gallery/gallery";
import { Chiffres } from "./chiffres/chiffres";

@Component({
  selector: 'app-home',
  imports: [Header, Hero, Footer, Description, Activite, Gallery, Chiffres],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
