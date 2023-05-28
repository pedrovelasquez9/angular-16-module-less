import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { routes } from './app.routes';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule, TranslatePipe } from '@ngx-translate/core';

function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
};

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    importProvidersFrom(HttpClientModule), 
    importProvidersFrom(TranslateModule.forRoot({
    loader:{
      deps: [HttpClient],
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory
    },
    defaultLanguage: 'es'
  }))]
};
