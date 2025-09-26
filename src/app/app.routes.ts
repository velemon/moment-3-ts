import type { Route } from '@angular/router';
import { Home } from './home/home';
import { Convert } from './convert/convert';
import { About } from './about/about';

export const routes: Route[] = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },  // Gör Home till startsida
    { path: 'home', component: Home },
    { path: 'convert', component: Convert },
    { path: 'about', component: About }
];