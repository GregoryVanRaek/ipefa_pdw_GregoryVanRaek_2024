import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Language } from '@shared/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  title = 'app';
  translate = inject(TranslateService);

  ngOnInit(): void {
    this.translate.setDefaultLang(Language.EN);
    this.translate.use(Language.EN);
  }

  changeLanguage(language: string): void {
    this.translate.use(language);
  }


}


