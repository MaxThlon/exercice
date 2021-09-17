import { inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { KeycloakService } from 'keycloak-angular';

import { KeycloakAuthGuardService } from './keycloak-auth-guard.service';
import { KeycloakAuthService } from './keycloak-auth.service';

describe('KeycloakAuthGuardService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [RouterTestingModule],
			providers: [KeycloakAuthGuardService, KeycloakAuthService, KeycloakService]
		});
	});

	it('should be created', inject([KeycloakAuthGuardService], (service: KeycloakAuthService) => {
		expect(service).toBeTruthy();
	}));
});
