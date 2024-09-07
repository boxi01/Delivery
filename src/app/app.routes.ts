import { Routes } from '@angular/router';
import { StartPageComponent } from '../pages/start-page/start-page.component';
import { FirstStepComponent } from '../pages/first-step/first-step.component';

export const routes: Routes = [
  { path: '',   redirectTo: '/start-page', pathMatch: 'full' },
  { path: 'start-page', component: StartPageComponent},
  { path: 'first-step', component: FirstStepComponent }
];
