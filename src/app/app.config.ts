import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import {
  provideClientHydration,
  withHttpTransferCacheOptions,
} from "@angular/platform-browser";
import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideClientHydration(),
    provideClientHydration(
      withHttpTransferCacheOptions({ includePostRequests: true })
    ),
  ],
};
