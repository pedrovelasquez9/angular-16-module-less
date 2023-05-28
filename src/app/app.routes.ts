import { Routes } from '@angular/router';
import { UsersService } from './core/users.service';

export const routes: Routes = [
    {path:'', pathMatch:'full', redirectTo:'users'},
    {path:'users', providers: [UsersService], loadComponent: () => import('./users/users.component').then(comp => comp.UsersComponent)}
];
