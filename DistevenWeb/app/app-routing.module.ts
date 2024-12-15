import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomePageComponent } from "./home-page";
import { PageNotFoundComponent } from "./layout";
import { AboutUsComponent } from "./about-us";

const routes: Routes = [
  { path: "home", redirectTo: "", pathMatch: "full" },
  { path: "", component: HomePageComponent },
  {
    path: "support",
    loadChildren: () =>
      new Promise(() => {
        if (window.location.href.match(/support/))
          window.location.href = "https://www.buymeacoffee.com/czuar";
      }),
  },
  {
    path: "github",
    loadChildren: () =>
      new Promise(() => {
        if (window.location.href.match(/github/))
          window.location.href = "https://github.com/dist-even";
      }),
  },
  {
    path: "credits",
    loadChildren: () =>
      new Promise(() => {
        if (window.location.href.match(/credits/))
          window.location.href = "https://github.com/SyedAli310";
      }),
  },
  {
    path: "get-started",
    loadChildren: () =>
      new Promise(() => {
        if (window.location.href.match(/get-started/))
          window.location.href = "https://app.dev.disteven.com";
      }),
  },
  { path: "about", component: AboutUsComponent },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
