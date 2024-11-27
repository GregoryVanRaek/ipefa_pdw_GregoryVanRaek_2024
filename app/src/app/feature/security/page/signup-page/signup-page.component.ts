import { Component } from '@angular/core';
import { CardComponent, InputComponent, SimpleButtonComponent } from '@shared/ui';
import { RouterLink } from '@angular/router';
import { dashboardRoutes } from '../../../dashboard';
import { AppNode } from '../../../../common';

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [
    CardComponent,
    InputComponent,
    SimpleButtonComponent,
    RouterLink,
  ],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.scss'
})
export class SignupPageComponent {
  title:string = 'Create an account';
  subtitle:string = 'Create an account to access the dashboard';
  protected readonly AppNode = AppNode;
}
