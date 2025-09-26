import { Component } from '@angular/core';
import { InfoCard } from '../info-card/info-card';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [InfoCard],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About {}