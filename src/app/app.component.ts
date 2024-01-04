import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent],
  template: `
  <app-home></app-home>
  <router-outlet></router-outlet>
`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-buzzfeed';
}
