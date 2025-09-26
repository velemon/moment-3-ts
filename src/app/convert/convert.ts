import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-convert',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './convert.html',
  styleUrls: ['./convert.css']
})
export class Convert {
  // Meter ↔ Foot
  meters: number | null = null;
  feet: number | null = null;

  // Celsius ↔ Fahrenheit
  celsius: number | null = null;
  fahrenheit: number | null = null;

  convertMetersToFeet() {
    if (this.meters !== null) {
      this.feet = this.meters * 3.28084;
    }
  }

  convertFeetToMeters() {
    if (this.feet !== null) {
      this.meters = this.feet / 3.28084;
    }
  }

  convertCelsiusToFahrenheit() {
    if (this.celsius !== null) {
      this.fahrenheit = (this.celsius * 9) / 5 + 32;
    }
  }

  convertFahrenheitToCelsius() {
    if (this.fahrenheit !== null) {
      this.celsius = ((this.fahrenheit - 32) * 5) / 9;
    }
  }
}