import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
export const appConfig = {
    providers: [
        provideRouter(routes),
        provideHttpClient(),
        importProvidersFrom([BrowserAnimationsModule]), provideClientHydration()
    ]
};
//# sourceMappingURL=app.config.js.map