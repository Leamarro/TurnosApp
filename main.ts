import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es-AR';

// Registra el locale 'es' con Angular.
registerLocaleData(localeEs);

// Resto de tu código de inicialización de la aplicación

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
