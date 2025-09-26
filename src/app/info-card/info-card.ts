import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  standalone: true,
  templateUrl: './info-card.html',
  styleUrl: './info-card.css'
})
export class InfoCard {
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() image: string = '';
  @Input() alt: string = ''; 
}
