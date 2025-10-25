import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'player/:username',
    loadComponent: () => import('./pages/player/player.component').then(m => m.PlayerComponent)
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];
