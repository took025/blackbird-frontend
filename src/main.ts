import { bootstrapApplication, provideClientHydration } from "@angular/platform-browser";
import { appConfig } from "./app/app.config";
import { AppComponent } from "./app/app.component";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideRouter } from "@angular/router";
import { APP_BASE_HREF } from "@angular/common";
import { routes } from "./app/app.routes";

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes),
  provideClientHydration(),
  { provide: APP_BASE_HREF, useValue: '/' },
  provideAnimations()],
}).catch((err) => console.error(err));
