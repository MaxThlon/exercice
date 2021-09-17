import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export interface TranslatedEntity {

	use(lang: string): Observable<any>;
}

export const TranslatedEntityInjectionToken = new InjectionToken<TranslatedEntity>('TranslatedEntity');
