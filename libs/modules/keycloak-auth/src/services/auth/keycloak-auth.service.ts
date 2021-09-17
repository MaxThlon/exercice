import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { AuthService } from '@maxthlon/modules/auth';

@Injectable()
export class KeycloakAuthService implements AuthService {
	constructor(private keycloakService: KeycloakService) {}

	async logout(): Promise<boolean> {
		await this.keycloakService.logout();
        return true;
	}
}
