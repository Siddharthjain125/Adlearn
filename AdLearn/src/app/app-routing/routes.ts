import { Routes , RouterOutlet } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { HomeComponent } from '../home/home.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'dashboard',     component: DashboardComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
