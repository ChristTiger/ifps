import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Formationtechnique } from "./pages/formationtechnique/formationtechnique";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Formationtechnique],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
