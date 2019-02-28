// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyB7stcmHeBr1dkXLTaHTurrU3gDI1uJ4ng",
    authDomain: "fraternitedelize-api.firebaseapp.com",
    databaseURL: "https://fraternitedelize-api.firebaseio.com",
    projectId: "fraternitedelize-api",
    storageBucket: "fraternitedelize-api.appspot.com",
    messagingSenderId: "966845412426"
  },
  gromaps: {
    apiKey: 'AIzaSyDa9tJ23ogNnCaEkacibZ1zt8HbuE0lmwU'
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
