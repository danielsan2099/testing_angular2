import { Component, Input } from '@angular/core';

@Component({
  selector: 'hero-view',
  templateUrl: 'hero.template.html'
})
export class HeroComponent {
  @Input() title: string;
  @Input() poder: string;
}
