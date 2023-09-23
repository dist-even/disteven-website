import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomePageComponent } from "./home-page";
import { LoginComponent } from "./shared";
import { PageNotFoundComponent } from "./layout";
import { AboutUsComponent } from "./about-us";

const routes: Routes = [
  {
    path: "",
    children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "home", component: HomePageComponent },
      // {
      //   path: "friends",
      //   loadChildren: () => import("./friendships/friendships.module").then( (m) => m.FriendshipsModule),
      //   canActivate: [AuthGuard],
      // },
      // {
      //   path: "groups",
      //   loadChildren: () => import("./groups/groups.module").then((m) => m.GroupsModule),
      //   canActivate: [AuthGuard],
      // },
      // {
      //   path: "expenses",
      //   loadChildren: () => import("./expenses/expenses.module").then((m) => m.ExpensesModule),
      //   canActivate: [AuthGuard],
      // },
    ],
  },
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
  { path: "about", component: AboutUsComponent },
  { path: "login", component: LoginComponent },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
