import { Routes } from '@angular/router';
import { StartPageComponent } from '../pages/start-page/start-page.component';

export const routes: Routes = [
  { path: '**', component: StartPageComponent },
  { path: 'start-page', component: StartPageComponent}
];
