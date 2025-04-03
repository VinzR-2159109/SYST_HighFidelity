import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SimulationComponent } from './pages/simulation/simulation.component';
import { ContactComponent } from './pages/contact/contact.component';
import { OverviewComponent } from './pages/overview/overview.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'overzicht', component: OverviewComponent },
  { path: 'simulatie', component: SimulationComponent },
  { path: 'contact', component: ContactComponent },
];
