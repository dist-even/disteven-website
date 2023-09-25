import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomePageComponent } from "./home-page";
import { PageNotFoundComponent } from "./layout";
import { AboutUsComponent } from "./about-us";
import { LoginPageComponent } from "./login-page";
import { SpinnerVisibilityService } from "ng-http-loader";

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
    path: "signin",
    loadChildren: () =>
      new Promise(() => {
        if (window.location.href.match(/signin/))
          window.location.href = "https://app.disteven.com";
      }),
  },
  {
    path: "signup",
    loadChildren: () =>
      new Promise(() => {
        if (window.location.href.match(/signup/))
          window.location.href = "https://app.disteven.com";
      }),
  },
  { path: "login", component: LoginPageComponent },
  { path: "about", component: AboutUsComponent },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
