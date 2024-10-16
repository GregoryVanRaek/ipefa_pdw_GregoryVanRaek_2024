import { Component, Input } from '@angular/core';
import { InputComponent } from '../../../form/component/input/input.component';
import { SimpleButtonComponent } from '@shared/ui/button/component/simple-button/simple-button.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    InputComponent,
    SimpleButtonComponent,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({required:true}) title!:string;
  @Input({required:true}) subTitle!:string;
}
