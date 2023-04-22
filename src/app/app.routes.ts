import {Routes} from "@angular/router";

export const routes: Routes = [
  {
    path: 'list', loadComponent:
      () => import('./hero-list/hero-list.component')
        .then(c => c.HeroListComponent)
  },
  {
    path: 'edit/:id', loadComponent:
      () => import('./hero-edit/hero-edit.component')
        .then(c => c.HeroEditComponent)
  },
  {
    path: 'registration', loadComponent:
      () => import('./hero-registration/hero-registration.component')
        .then(c => c.HeroRegistrationComponent)
  },
  {path: '', redirectTo: 'list', pathMatch: 'full'},
];
