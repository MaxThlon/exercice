import { Injectable, Inject, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

import { TranslateConfig } from './translate-config';
import {
	TranslatedEntity,
	TranslatedEntityInjectionToken
} from './translated-entity';

@Injectable({
	providedIn: 'root'
})
export class MtTranslateService {
	constructor(private translateService: TranslateService,
				@Optional()
				@Inject(TranslatedEntityInjectionToken)
				private translatedEntities: TranslatedEntity[]) {}

	init(translateConfig: TranslateConfig): void {
		this.translateService.addLangs(translateConfig.availableLangs);
		const browserLang = this.translateService.getBrowserLang();

        if (translateConfig.availableLangs.includes(browserLang)) {
            translateConfig.defaultLang = browserLang;
        }

		this.translateService.setDefaultLang(translateConfig.defaultLang);
	}

	use(lang: string): Observable<any> {
		console.log('MtTranslateService.use(' + lang + ').');

		if (this.translatedEntities) {
			this.translatedEntities.forEach(translatedEntity => {
				translatedEntity.use(lang).subscribe(
					() => {},
					err => {
						console.error(`Problem with translatedEntity '${lang}' language initialization.'`);
					}
				);
			});
		}
		return this.translateService.use(lang);
	}
}
