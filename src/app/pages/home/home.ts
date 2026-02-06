import { Component } from '@angular/core';
import { Header } from "../../share/header/header";
import { Hero } from "./hero/hero";
import { Footer } from "../../share/footer/footer";
import { Description } from "./description/description";

@Component({
  selector: 'app-home',
  imports: [Header, Hero, Footer, Description],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
