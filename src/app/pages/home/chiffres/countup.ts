import { Directive, ElementRef, Input, OnInit, OnDestroy, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appCountup]',
  standalone: true
})
export class Countup implements AfterViewInit, OnDestroy {

  @Input() appCountup: number = 0;
  @Input() startVal: number = 0;
  @Input() duration: number = 2000;
  @Input() prefix: string = '';
  @Input() suffix: string = '';

  private animationFrameId: number | null = null;
  private startTime: number | null = null;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    // Optionnel : lancer seulement quand visible (IntersectionObserver)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(this.el.nativeElement);
  }

  private startAnimation() {
    const endVal = this.appCountup;
    const startVal = this.startVal;
    const duration = this.duration;

    if (endVal === startVal) {
      this.updateValue(endVal);
      return;
    }

    this.startTime = null;

    const animate = (timestamp: number) => {
      if (!this.startTime) this.startTime = timestamp;
      const progress = Math.min((timestamp - this.startTime) / duration, 1);
      const current = startVal + (endVal - startVal) * this.easeOutQuad(progress);

      this.updateValue(Math.round(current));

      if (progress < 1) {
        this.animationFrameId = requestAnimationFrame(animate);
      }
    };

    this.animationFrameId = requestAnimationFrame(animate);
  }

  private easeOutQuad(t: number): number {
    return t * (2 - t);
  }

  private updateValue(value: number) {
    this.el.nativeElement.textContent = this.prefix + value.toLocaleString() + this.suffix;
  }

  ngOnDestroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

}
