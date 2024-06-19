import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'board-management',
    loadComponent: () => import('./board-management/board-management.component').then(m => m.BoardManagementComponent)
  }
];
