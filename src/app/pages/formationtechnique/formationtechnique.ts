import { Component } from '@angular/core';
import { Hero } from "./hero/hero";
import { Description } from "./description/description";
import { Header } from "../../share/header/header";
import { Footer } from "../../share/footer/footer";
import { Engins } from "./engins/engins";
import { Modalite } from "./modalite/modalite";

@Component({
  selector: 'app-formationtechnique',
  imports: [Hero, Description, Header, Footer, Engins, Modalite],
  templateUrl: './formationtechnique.html',
  styleUrl: './formationtechnique.css',
})
export class Formationtechnique {

}
