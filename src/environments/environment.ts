// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  environment: 'local',
  api: 'http://localhost:3000/api/v1',
  firebase: {
    apiKey: "AIzaSyDpIXkehVmew1BCSLCuqgfzIf-xTtscD9E",
    authDomain: "interview-wefox.firebaseapp.com",
    databaseURL: "https://interview-wefox-default-rtdb.firebaseio.com",
    projectId: "interview-wefox",
    storageBucket: "interview-wefox.appspot.com",
    messagingSenderId: "422604386055",
    appId: "1:422604386055:web:271405aa113aefa0cedfa2"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
