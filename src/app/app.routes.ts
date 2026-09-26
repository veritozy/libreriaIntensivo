import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Gallery } from './features/gallery/gallery';
import { Usuarios } from './features/usuarios/usuarios';
import { Login } from './shared/login/login';
import { canactivateguardGuard } from './guards/canactivateguard-guard';

export const routes: Routes = [
    {path:"home", component:Home},
    {path:"", redirectTo:"home", pathMatch:"full"},
    {path:"galeria", component:Gallery, canActivate:[canactivateguardGuard]},
    {path:"usuarios", component:Usuarios},
    {path:"login", component:Login}
];
