import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';
import { NotFoundComponent } from './not-found/not-found.component';
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled', // Retourne à l'ancre après un retour/suivant dans le navigateur
  anchorScrolling: 'enabled',
  scrollOffset: [0, 85],
};

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'mentions-legales',
    component: MentionsLegalesComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
