// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  name: 'default',
  firebase: {
    config: {
      apiKey: "AIzaSyBsGLmkOwyk2oUZbKuZQP7FSpww_1rJFSc",
      authDomain: "ecommerce-64080.firebaseapp.com",
      projectId: "ecommerce-64080",
      storageBucket: "ecommerce-64080.appspot.com",
      messagingSenderId: "400408176230",
      appId: "1:400408176230:web:5432f20257de94c2a52fa7"
    }
  },
  actionCodeSettings: {
    url: 'http://localhost:5200/profile/new',
    handleCodeInApp: true
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
