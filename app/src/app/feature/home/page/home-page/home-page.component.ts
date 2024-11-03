import { Component } from '@angular/core';
import { CardComponent, SimpleButtonComponent } from '@shared/ui';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    SimpleButtonComponent,
    CardComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
