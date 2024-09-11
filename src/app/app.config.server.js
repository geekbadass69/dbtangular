import { mergeApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { provideHttpClient, withFetch } from '@angular/common/http';
const serverConfig = {
    providers: [
        provideServerRendering(), provideHttpClient(withFetch())
    ]
};
export const config = mergeApplicationConfig(appConfig, serverConfig);
//# sourceMappingURL=app.config.server.js.map