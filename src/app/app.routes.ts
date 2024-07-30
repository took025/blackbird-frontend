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
    },
    {
        path: 'success-cases',
        loadComponent: () =>
            import("./components/success-cases/succes-cases/succes-cases.component").then((c) => c.SuccesCasesComponent),
    },
    {
        path: 'success-case/:id',
        loadComponent: () =>
            import("./components/success-cases/success-case/success-case.component").then((c) => c.SuccessCaseComponent),
    },
];
