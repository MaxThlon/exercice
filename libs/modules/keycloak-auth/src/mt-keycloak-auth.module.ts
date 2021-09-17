import { NgModule, ModuleWithProviders } from '@angular/core';
import { KeycloakAngularModule } from 'keycloak-angular';

import { KeycloakAuthGuardService } from './services/auth/keycloak-auth-guard.service';
import { KeycloakAuthService } from './services/auth/keycloak-auth.service';

@NgModule({
	imports: [
		KeycloakAngularModule
	],
	declarations: [],
	exports: []
})
export class MtKeycloakAuthModule {
	static forRoot(): ModuleWithProviders<MtKeycloakAuthModule> {
		return {
			ngModule: MtKeycloakAuthModule,
			providers: [
				KeycloakAuthGuardService,
                KeycloakAuthService
			]
		};
	}
}
