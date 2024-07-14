import { Routes } from "@angular/router";

export const testRoutes: Routes = [
    {
        path: "marketing",
        title: "First component",
        loadComponent: () =>
            import("./marketing/marketing.component").then(
                (c) => c.MarketingComponent
            ),
    },
];