import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { routes } from '@app/app.routes';
import { authEffects } from '@store/authState/auth.effects';
import { provideEffects } from '@ngrx/effects';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { authFeatureKey, authReducer } from '@store/authState/auth.reducer';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          prefix: 'uebiz',
          darkModeSelector: 'none',
          cssLayer: false,
        },
      },
    }),
    provideHttpClient(),
    provideStore(),
    provideEffects([authEffects]),
    provideState(authFeatureKey, authReducer),
    provideStoreDevtools({
      name: 'UEBiz App',
    }),
  ],
};
