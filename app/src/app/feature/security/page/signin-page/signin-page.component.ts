import { Component} from '@angular/core';
import { CardComponent } from '@shared/ui';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signin-page',
  standalone: true,
  imports: [
    CardComponent,
    RouterLink,
  ],
  templateUrl: './signin-page.component.html',
  styleUrl: './signin-page.component.scss'
})
export class SigninPageComponent {
  title:string = 'Welcome back!';
  subtitle:string = 'Sign in to access the administration';
}
