import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

import { KeycloakAuthGuardService } from '@maxthlon/modules/keycloak-auth';
// import {ThlonLogoutComponent} from 'thlon-keycloak';
// import {ThlonGroupComponent} from 'thlon-group';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  }/*,
  {
    path: 'grouplist',
    // component: ThlonGroupComponent,
    loadChildren: './lazy/lazy.module#LazyModule',
    canActivate: [KeycloakAuthGuardService]
  }/*,
  {
    path: 'logout',
    component: ThlonLogoutComponent,
    canActivate: [KeycloakAuthGuardService]
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  providers: [KeycloakAuthGuardService]
})
export class AppRoutingModule { }
