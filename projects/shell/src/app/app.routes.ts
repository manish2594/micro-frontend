import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'address',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'profile',
        remoteEntry: 'http://localhost:4300/remoteEntry.js',
        exposedModule: './AddressModule',
      })
        .then((m) => m.AddressModule)
        .catch((err) => console.error(err)),
  },
];
