import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { CardComponent, InputComponent, LoginCardComponent, SimpleButtonComponent } from '@shared/ui';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgClass, NgForOf } from '@angular/common';
import { LabelWithParamPipe } from '@shared/ui/text/pipe/label-with-param.pipe';
import { ApiService, SignInPayload } from '@shared/api';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SecurityService } from '../../service';

@Component({
  selector: 'app-signin-page',
  standalone: true,
  imports: [
    CardComponent,
    RouterLink,
    TranslateModule,
    NgForOf,
    LabelWithParamPipe,
    LoginCardComponent,
    ReactiveFormsModule,
    InputComponent,
    SimpleButtonComponent,
    NgClass,
  ],
  templateUrl: './signin-page.component.html',
  styleUrl: './signin-page.component.scss'
})
export class SigninPageComponent implements OnInit {
  title:string = 'Welcome back!';
  subtitle:string = 'Sign in to access the administration';

  public formGroup :FormGroup<any> = new FormGroup<any>({});

  ngOnInit():void{
    this.formGroup = new FormGroup<any>({
      username : new FormControl('', [Validators.required]),
      password : new FormControl('', [Validators.required]),
    })
    this.formGroup.valueChanges.subscribe((value:any) => console.log('value', value) )
  }

  constructor(public securityService :SecurityService) {
  }

  signIn():void{
    const value :SignInPayload = this.formGroup.value;
    if(this.formGroup.valid){
      this.securityService.signIn(value).subscribe();
    }
  }

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

