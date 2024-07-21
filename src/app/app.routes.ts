import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: "home",
        loadComponent: () =>
            import("./components/home-page/home-page/home-page.component").then(
                (c) => c.HomePageComponent
            ),
    },
    {
        path: 'services',
        loadChildren: () =>
            import("./components/services/services.route").then((r) => r.testRoutes),
    }
];
