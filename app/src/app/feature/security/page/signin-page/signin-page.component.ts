import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from '@shared/ui';

@Component({
  selector: 'app-signin-page',
  standalone: true,
  imports: [
    CardComponent,
  ],
  templateUrl: './signin-page.component.html',
  styleUrl: './signin-page.component.scss'
})
export class SigninPageComponent {
}
