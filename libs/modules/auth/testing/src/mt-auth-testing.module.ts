import { NgModule, ModuleWithProviders } from '@angular/core';
import { AuthTestingService } from './services/auth/auth-testing.service';

@NgModule({
    imports: [],
	providers: [
        AuthTestingService
	]
})
export class MtAuthTestingModule {}
