import {KeycloakConfig} from 'keycloak-angular';
import { TranslateConfig } from '@maxthlon/modules/translate';
// import {InjectableRxStompConfig} from '@stomp/ng2-stompjs';

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

/*const injectableRxStompConfig: InjectableRxStompConfig = {
  brokerURL: 'wss://macmax:8443/stomp/websocket',
  //connectHeaders: {"Authorization": "Bearer Meu"},

  // How often to heartbeat?
  // Interval in milliseconds, set to 0 to disable
  heartbeatIncoming: 0, // Typical value 0 - disabled
  heartbeatOutgoing: 200000, // Typical value 20000 - every 20 seconds

  // Wait in milliseconds before attempting auto reconnect
  // Set to 0 to disable
  // Typical value 500 (500 milli seconds)
  reconnectDelay: 200,

  // Will log diagnostics on console
  // It can be quite verbose, not recommended in production
  // Skip this key to stop logging to console
  debug: (msg: string): void => {
    console.log(new Date(), msg);
  }
};*/

export const environment = {
    production: false,
    baseURL: 'https://macmax:8443/api',
    springrestURL: 'https://macmax:8443/springrest/api/',
    keycloakConfig: keycloakConfig,
    translate: translateConfig,
  // injectableRxStompConfig: injectableRxStompConfig
};
