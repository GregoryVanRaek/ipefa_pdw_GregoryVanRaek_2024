import { Component, computed, signal } from '@angular/core';
import { CardComponent } from '@shared/ui';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgForOf } from '@angular/common';
import { LabelWithParamPipe } from '@shared/ui/text/pipe/label-with-param.pipe';

@Component({
  selector: 'app-signin-page',
  standalone: true,
  imports: [
    CardComponent,
    RouterLink,
    TranslateModule,
    NgForOf,
    LabelWithParamPipe,
  ],
  templateUrl: './signin-page.component.html',
  styleUrl: './signin-page.component.scss'
})
export class SigninPageComponent {
  title:string = 'Welcome back!';
  subtitle:string = 'Sign in to access the administration';


  // Définition d'un signal pour stocker les erreurs
  private _errors = signal<string[]>([]);

  // Création d'un computed signal public pour accéder aux erreurs
  protected errors = computed(() => this._errors());

  // Méthode pour ajouter une erreur
  addError(error: string) {
    this._errors.update(current => [...current, error]);
  }

  // Méthode pour supprimer une erreur
  removeError(error: string) {
    this._errors.update(current => current.filter(e => e !== error));
  }

  // Méthode pour réinitialiser les erreurs
  clearErrors() {
    this._errors.set([]);
  }

  get Count() {
    return this._errors().length;
  }

}
