import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { KeycloakService } from 'keycloak-angular';
import { Observable, of } from 'rxjs';
import { KeycloakAuthService } from './keycloak-auth.service';

class MockRouter {
	navigate = jasmine.createSpy('navigate');
}
const translations: any = { CARDS_TITLE: 'This is a test' };

class FakeLoader implements TranslateLoader {
	getTranslation(lang: string): Observable<any> {
		return of(translations);
	}
}

describe('KeycloakAuthService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterModule.forRoot([]),
				HttpClientModule,
				HttpClientTestingModule,

				TranslateModule.forRoot({
					loader: { provide: TranslateLoader, useClass: FakeLoader }
				})
			],
			declarations: [],
			providers: [KeycloakAuthService, KeycloakService, { provide: Router, useClass: MockRouter }]
		});
	});

	it('should be created', inject([KeycloakAuthService], (service: KeycloakAuthService) => {
		expect(service).toBeTruthy();
	}));
});
