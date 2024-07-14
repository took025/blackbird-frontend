import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'services',
        loadChildren: () =>
            import("./components/services/services.route").then((r) => r.testRoutes),
    }
];
