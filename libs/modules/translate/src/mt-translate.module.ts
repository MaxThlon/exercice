import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MtTranslateService } from './services/mt-translate.service';

@NgModule({
	imports: [
		HttpClientModule
	],
	providers: []
})
export class MtTranslateModule {
	static forRoot(): ModuleWithProviders<MtTranslateModule> {
		return {
			ngModule: MtTranslateModule,
			providers: [

                MtTranslateService
			]
		};
	}
}
