// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --configuration production` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  version: '22.1.8',  
  googleMapsAPIKey: 'AIzaSyCERpTyB0-t2VxMabliMWm44DT4FNwv9GM',

  useShop: true,
  useMar: true,

  // while using a dotnet development server (+local or production database)
  // apiUrl: 'https://localhost:5001/api/',
  // apiWhiteListDomain: ['localhost:5001'],
  // apiBlackListDomain: ['localhost:5001/api/account'],

  // api for use of the production dotnet and database
  apiUrl: 'https://localhost:5001/api/',
  // apiUrl: 'https://www.rv-services.be/api/',
  stripePublicKey:
    'pk_test_51RfMhbGh1TYGuem0rEZoEzS0ZXxrYqMs85W62oR1cPJmNqsZkwutGjB2n3eZ1UiW30dRyfO7A6OKO34FKzSOxdNW00kmm7B5vq',
  
  // Api Key and info for using contactmail functionality
  apiVsoftMailGuid: '5205fa57-766f-4af0-9207-d993d81d759b',
  apiVsoftSendFromAddress: 'josvermoesen@rv.be',
  apiVsoftSendFromName: 'Roelandt & Vermoesen 1935',

  // For vsoft
  contentful: {
    spaceId: 'mq8ieqd7mcv8',
    token: 'e92105b30fe907b0de47100961329d50bec5e0476f55473e1b821e4919e4a26e',
  },

  // Banking info
  brokerIban: 'BE83891854037015',
  brokerBic: 'VDSPBE91',
  brokerName: 'Roelandt en Vermoesen bv',

  // google meetup
  meetupCode: '9310gb141',
};
