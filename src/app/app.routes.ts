import { Routes } from '@angular/router';
import { UsersService } from './core/users.service';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path:'', pathMatch:'full', redirectTo:'users'},
    {path:'users', 
    providers: [UsersService],
    canMatch: [authGuard], 
    loadComponent: () => import('./users/users.component').then(comp => comp.UsersComponent)},
    {path: "**", loadComponent: () => import('./not-found/not-found.component').then(comp => comp.NotFoundComponent)}
];
