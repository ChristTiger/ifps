import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Countup } from './countup';


@Component({
  selector: 'app-chiffres',
  imports: [ CommonModule, Countup ],
  templateUrl: './chiffres.html',
  styleUrl: './chiffres.css',
})
export class Chiffres implements AfterViewInit {

  @ViewChild('sectionRef') sectionRef!: ElementRef;

  // ← C'EST ICI QU'IL MANQUE LA DÉCLARATION
  isVisible = false;

  ngAfterViewInit() {
    if (!this.sectionRef?.nativeElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          // Affiche le fond quand au moins 15% de la section est visible
          this.isVisible = entry.intersectionRatio > 0.15;
        });
      },
      {
        threshold: [0, 0.15, 0.3, 0.5, 0.7, 1],
        rootMargin: '0px 0px -10% 0px'  // anticipe un peu la disparition
      }
    );

    observer.observe(this.sectionRef.nativeElement);
  }

}
