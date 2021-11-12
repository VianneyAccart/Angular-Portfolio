import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: "enabled", // Retourne à l'ancre après un retour/suivant dans le navigateur
  anchorScrolling: "enabled",
  scrollOffset: [0, 85],
}

const routes: Routes = [
  {
    path: "",
    component: HomepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
