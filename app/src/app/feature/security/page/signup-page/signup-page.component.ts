import { Component, computed, OnInit, Signal } from '@angular/core';
import { CardComponent, InputComponent, SimpleButtonComponent } from '@shared/ui';
import { RouterLink } from '@angular/router';
import { AppNode } from '../../../../common';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule, ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { NgClass } from '@angular/common';
import { SecurityService } from '../../service';
import { SignupPayload } from '@shared/api';

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [
    CardComponent,
    InputComponent,
    SimpleButtonComponent,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    NgClass,
  ],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.scss'
})
export class SignupPageComponent implements OnInit {
  title:string = 'Create an account';
  subtitle:string = 'Create an account to access the dashboard';
  protected readonly AppNode = AppNode;

  formGroup :FormGroup<any> = new FormGroup({});

  constructor(public securityService :SecurityService) {
  }

  ngOnInit() {
    this.formGroup = new FormGroup(
      {
        username: new FormControl('', [Validators.required, Validators.minLength(3)]),
        mail: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required]),
        confirmPassword: new FormControl('', [Validators.required]),
      },
      { validators: this.checkPassword } // validator pour le groupe en entier
    );
  }

  private checkPassword: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true }; // erreur si les password ne correspondent pas
  };

  passwordMismatchError() {
    return this.formGroup.errors?.['passwordMismatch'];
  }

  register() {
    if (this.formGroup.valid) {
      const signupPayload :SignupPayload = this.formGroup.value;
      console.log(signupPayload);
      this.securityService.signUp(signupPayload).subscribe();
    } else {
      console.log('Form invalid');
    }
  }

}
