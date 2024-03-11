import { Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';

export const routes: Routes = [
    {path:'',redirectTo:'address',pathMatch:'full'},
    {path:'address',component:AddressComponent}
];
