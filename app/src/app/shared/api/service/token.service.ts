import { effect, EffectRef, Injectable, signal, WritableSignal } from '@angular/core';
import { Token } from 'src/app/shared/api/data/model';
import { environment } from '../../../../environments';
import { isNil } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  public token$: WritableSignal <Token> = signal(this.getToken()); // signal lancé dès l'injection du service
  private readonly tokenSaveHandler: EffectRef = effect (() => this.handleTokenChange(this.token$()));


  public setToken(token: Token ): void {
    if (!isNil(token.token)) {
      this.token$.set(token);
    } else {
      this.token$.set(this.getEmpty());
      localStorage.removeItem(environment.TOKEN_KEY);
    }
  }

  private handleTokenChange(token: Token ): void {
    if (!token.isEmpty) {
      localStorage.setItem(environment.TOKEN_KEY, JSON.stringify(token));
    } else {
      localStorage.removeItem(environment.TOKEN_KEY);
    }
  }

  private getToken(): Token {
    const str :string | null = localStorage.getItem(environment.TOKEN_KEY);
    return !isNil(str) ? JSON.parse(str) as Token : this.getEmpty();
  }

  public getEmpty(): Token {
    return {
      token: '',
      refreshToken: '',
      isEmpty: true
    };
  }

}
