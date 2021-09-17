import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { KeycloakService } from 'keycloak-angular';

import {
    MtKeycloakAuthModule,
    keycloakServiceInitializer
} from '@maxthlon/modules/keycloak-auth';
import {
	translateServiceInitializer,
	translationInitializerFactory,
	MtTranslateModule,
	MtTranslateService
} from '@maxthlon/modules/translate';
import { MtMenuModule } from '@maxthlon/components/menu';

import {environment} from '../environments/environment';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { UserService } from '../user/services/userService';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        FormlyModule.forRoot(),
        TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: translateServiceInitializer,
            deps: [HttpClient]
        }
        }),
        MtKeycloakAuthModule.forRoot(),
        MtTranslateModule.forRoot(),
        MtMenuModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
    {
        provide: APP_INITIALIZER,
        useFactory: (mtTranslateService: MtTranslateService) => translationInitializerFactory(environment.translate,
                                                                                                mtTranslateService),
        multi: true,
        deps: [MtTranslateService]
    },
        // RxStompService,
    /*{
        provide: APP_INITIALIZER,
        useFactory: (keycloakService: KeycloakService) => keycloakServiceInitializer(environment.keycloakConfig,
                                                                                    keycloakService),
        multi: true,
        deps: [KeycloakService]
    }/,
        {
        provide: APP_INITIALIZER,
        useFactory: (keycloakService: KeycloakService,
                    rxStompService: RxStompService) => keycloakStompServiceInitializer(keycloakService,
                                                                                        environment.injectableRxStompConfig,
                                                                                        rxStompService),
        multi: true,
        deps: [KeycloakService,
                RxStompService]
    }*/,
    UserService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
