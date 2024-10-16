import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SigninPageComponent } from './feature';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SigninPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
