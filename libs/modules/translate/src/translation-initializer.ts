import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateConfig } from './services/translate-config';
import { MtTranslateService } from './services/mt-translate.service';

export function translateServiceInitializer(http: HttpClient) {
	return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

export function translationInitializerFactory(translateConfig: TranslateConfig,
                                              mtTranslateService: MtTranslateService): () => Promise<any> {
	return (): Promise<any> => {
		return new Promise(async (resolve, reject) => {
			try {
				mtTranslateService.init(translateConfig);
				mtTranslateService.use(translateConfig.defaultLang).subscribe(
					() => {},
					err => {
						console.error(`Error with '${translateConfig.defaultLang}' language initialization.'`);
					},
					() => {
						resolve(true);
					}
				);
				console.log(`Successfully initialized '${translateConfig.defaultLang}' language.'`);
			} catch (error) {
				reject(error);
			}
		});
	};
}
