# Glip Bot creation delay issue

This project is to reproduce the issue: "Bot creation delay": whenever you add the bot user to Glip, it is not immediately ready. You cannot create subscription for it. You have to wait (up to several minutes) in order to create subscription successfully.


## How to reproduce the issue

```
yarn install
yarn ngork
cp .sample.env
edit .env
yarn dev
```

Login https://developer.ringcentral.com 

Set RingCentral redirect uri to `https://<ngrok-url>/bot/oauth`

Click "Add bot to Glip".


## Result

The issue is sporadic. when there is no issue:

```
➜  bot_creation_delay yarn dev
yarn run v1.9.2
warning package.json: No license field
$ node -r @babel/register -r dotenv/config index.js
{ uri:
   'https://platform.ringcentral.com/restapi/v1.0/subscription/5a9ec86c-64de-436a-9109-31a9880389c7',
  id: '5a9ec86c-64de-436a-9109-31a9880389c7',
  creationTime: '2018-11-21T08:36:01.704Z',
  status: 'Active',
  eventFilters: [ '/restapi/v1.0/glip/posts', '/restapi/v1.0/glip/groups' ],
  expirationTime: '2033-11-17T08:36:01.704Z',
  expiresIn: 473039999,
  deliveryMode:
   { transportType: 'WebHook',
     encryption: false,
     address: 'https://7d622b6c.eu.ngrok.io/bot/webhook' } }
^C


When there is an issue, I got the following response (timestamp: 2018-11-21T08:36 or a few minute later):

```
➜  bot_creation_delay yarn dev
yarn run v1.9.2
warning package.json: No license field
$ node -r @babel/register -r dotenv/config index.js
{ uri:
   'https://platform.ringcentral.com/restapi/v1.0/account/37439510/extension/1601859021',
  id: 1601859021,
  extensionNumber: '8138',
  contact:
   { firstName: '2018-11-21-16-39',
     email:
      '5CA91E6E77B57948291584AD51F6901FB5F7D7E2DCE16F6CF712F7EE220A92DF@ringcentral.com',
     pronouncedName: { type: 'Default', text: '2018-11-21-16-39' } },
  name: '2018-11-21-16-39',
  type: 'Bot',
  status: 'Enabled',
  serviceFeatures:
   [ { featureName: 'SMS',
       enabled: false,
       reason: 'ExtensionTypeLimitation' },
     { featureName: 'SMSReceiving',
       enabled: false,
       reason: 'InsufficientPermissions' },
     { featureName: 'Pager',
       enabled: false,
       reason: 'ExtensionTypeLimitation' },
     { featureName: 'PagerReceiving',
       enabled: false,
       reason: 'ExtensionTypeLimitation' },
     { featureName: 'Voicemail',
       enabled: false,
       reason: 'ExtensionTypeLimitation' },
     { featureName: 'Fax',
       enabled: false,
       reason: 'ExtensionTypeLimitation' },
     { featureName: 'FaxReceiving', enabled: true },
     { featureName: 'DND',
       enabled: false,
       reason: 'ExtensionTypeLimitation' },
     { featureName: 'RingOut',
       enabled: false,
       reason: 'ExtensionTypeLimitation' },
     { featureName: 'InternationalCalling',
       enabled: false,
       reason: 'InsufficientPermissions' },
     { featureName: 'Presence',
       enabled: false,
       reason: 'ExtensionTypeLimitation' },
     { featureName: 'VideoConferencing',
       enabled: false,
       reason: 'ExtensionTypeLimitation' },
     { featureName: 'SalesForce',
       enabled: false,
       reason: 'ExtensionTypeLimitation' },
     { featureName: 'Intercom',
       enabled: false,
       reason: 'ExtensionTypeLimitation' },
     { featureName: 'Paging',
       enabled: false,
       reason: 'ExtensionTypeLimitation' },
     { featureName: 'Conferencing',
       enabled: false,
       reason: 'ExtensionTypeLimitation' },
     { featureName: 'VoipCalling',
       enabled: false,
       reason: 'ExtensionTypeLimitation' },
     { featureName: 'FreeSoftPhoneLines',
       enabled: false,
       reason: 'ExtensionTypeLimitation' },
     { featureName: 'HipaaCompliance',
       enabled: false,
       reason: 'ExtensionTypeLimitation' },
     { featureName: 'CallPark',
       enabled: false,
       reason: 'ExtensionTypeLimitation' },
     { featureName: 'OnDemandCallRecording',
       enabled: false,
       reason: 'ExtensionTypeLimitation' },
     { featureName: 'Reports',
       enabled: false,
       reason: 'ExtensionTypeLimitation' },
     { featureName: 'CallForwarding',
       enabled: false,
       reason: 'ExtensionTypeLimitation' },
     { featureName: 'DeveloperPortal',
       enabled: false,
       reason: 'InsufficientPermissions' },
     { featureName: 'EncryptionAtRest',
       enabled: false,
       reason: 'AccountLimitation' },
     { featureName: 'BlockedMessageForwarding',
       enabled: false,
       reason: 'AccountLimitation' },
     { featureName: 'EmergencyCalling',
       enabled: false,
       reason: 'AccountLimitation' },
     { featureName: 'HDVoice', enabled: true },
     { featureName: 'SingleExtensionUI',
       enabled: false,
       reason: 'AccountLimitation' },
     { featureName: 'CallSupervision', enabled: true },
     { featureName: 'VoicemailToText',
       enabled: false,
       reason: 'ExtensionLimitation' },
     { featureName: 'WebPhone',
       enabled: false,
       reason: 'ExtensionTypeLimitation' },
     { featureName: 'RCTeams',
       enabled: false,
       reason: 'ExtensionTypeLimitation' },
     { featureName: 'UserManagement',
       enabled: false,
       reason: 'ExtensionTypeLimitation' },
     { featureName: 'Calendar', enabled: true },
     { featureName: 'PasswordAuth', enabled: true },
     { featureName: 'CallerIdControl',
       enabled: false,
       reason: 'AccountLimitation' },
     { featureName: 'AutomaticInboundCallRecording',
       enabled: false,
       reason: 'ExtensionLimitation' },
     { featureName: 'AutomaticOutboundCallRecording',
       enabled: false,
       reason: 'ExtensionLimitation' },
     { featureName: 'AutomaticCallRecordingMute',
       enabled: false,
       reason: 'AccountLimitation' },
     { featureName: 'SoftPhoneUpdate', enabled: true },
     { featureName: 'LinkedSoftphoneLines',
       enabled: false,
       reason: 'AccountTypeLimitation' },
     { featureName: 'CallQualitySurvey',
       enabled: false,
       reason: 'AccountLimitation' },
     { featureName: 'AccountFederation',
       enabled: false,
       reason: 'AccountLimitation' },
     { featureName: 'MMS',
       enabled: false,
       reason: 'ExtensionTypeLimitation' },
     { featureName: 'CallParkLocations', enabled: true },
     { featureName: 'ExternalDirectoryIntegration',
       enabled: false,
       reason: 'AccountTypeLimitation' },
     { featureName: 'CallSwitch', enabled: true },
     { featureName: 'PromoMessage', enabled: true },
     { featureName: 'SiteCodes',
       enabled: false,
       reason: 'AccountLimitation' },
     { featureName: 'InternationalSMS',
       enabled: false,
       reason: 'ExtensionTypeLimitation' },
     { featureName: 'ConferencingNumber', enabled: true },
     { featureName: 'VoipCallingOnMobile', enabled: true },
     { featureName: 'DynamicConference',
       enabled: false,
       reason: 'AccountLimitation' },
     { featureName: 'ConfigureDelegates', enabled: true },
     { featureName: 'Archiver', enabled: true },
     { featureName: 'EmergencyAddressAutoUpdate',
       enabled: false,
       reason: 'ExtensionTypeLimitation' } ],
  regionalSettings:
   { timezone:
      { uri:
         'https://platform.ringcentral.com/restapi/v1.0/dictionary/timezone/58',
        id: '58',
        name: 'US/Pacific',
        description: 'Pacific Time (US & Canada)',
        bias: '-480' },
     homeCountry:
      { uri:
         'https://platform.ringcentral.com/restapi/v1.0/dictionary/country/1',
        id: '1',
        name: 'United States',
        isoCode: 'US',
        callingCode: '1' },
     language:
      { id: '1033',
        name: 'English (United States)',
        localeCode: 'en-US' },
     greetingLanguage:
      { id: '1033',
        name: 'English (United States)',
        localeCode: 'en-US' },
     formattingLocale:
      { id: '1033',
        name: 'English (United States)',
        localeCode: 'en-US' },
     timeFormat: '12h' },
  setupWizardState: 'NotStarted',
  permissions:
   { admin: { enabled: false },
     internationalCalling: { enabled: false } },
  profileImage:
   { uri:
      'https://media.ringcentral.com/restapi/v1.0/account/37439510/extension/1601859021/profile-image',
     etag: 'f4eea4f7c0ff178fae103c75057a96f0',
     contentType: 'image/png',
     lastModified: '2018-11-21T08:39:11.966Z',
     scales: [ [Object], [Object], [Object] ] },
  account:
   { uri:
      'https://platform.ringcentral.com/restapi/v1.0/account/37439510',
     id: '37439510' },
  hidden: false }
(node:34411) UnhandledPromiseRejectionWarning: Error: 403 Forbidden
{"errorCode":"SUB-406","message":"Not allowed subscribe for events to extensions of other account","errors":[{"errorCode":"SUB-406","message":"Not allowed subscribe for events to extensions of other account"}]}
    at Function._axios.request (/Users/tyler.liu/src/bots/bot_creation_delay/node_modules/ringcentral-js-concise/dist/webpack:/RingCentral/src/ringcentral.js:41:1)
    at process._tickCallback (internal/process/next_tick.js:68:7)
(node:34411) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 2)
(node:34411) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
```
