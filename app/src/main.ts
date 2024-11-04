import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { TranslateCompiler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from './app/app.translation';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';
import { TranslateMessageFormatCompiler } from 'ngx-translate-messageformat-compiler';


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      HttpClientModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
        }, compiler: {
          provide: TranslateCompiler,
          useClass: TranslateMessageFormatCompiler
        }
      })
    ),
  ],
}).catch((err) => console.error(err));
