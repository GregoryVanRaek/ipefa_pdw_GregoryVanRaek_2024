import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-router',
  standalone: true,
  imports: [
    RouterOutlet,
  ],
  templateUrl: './home-router.component.html',
  styleUrl: './home-router.component.scss'
})
export class HomeRouterComponent {

}
