import { KeycloakConfig } from 'keycloak-angular';
import { TranslateConfig } from '@maxthlon/modules/translate';

const keycloakConfig: KeycloakConfig = {
    url: 'https://macmax:8443/auth',
    realm: 'Thlon',
    clientId: 'ThlonAngular'
    /*credentials: {
      secret: '*****-*****-***-**'
    }*/
};

const translateConfig: TranslateConfig = {
    defaultLang: 'en',
    availableLangs: ['en', 'fr']
};

export const environment = {
    production: false,
    baseURL: 'https://macmax:8443/api',
    springrestURL: 'https://macmax:8443/springrest/api/',
    keycloak: keycloakConfig,
    translate: translateConfig
};
