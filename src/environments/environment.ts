// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  title: 'Title',
  author: {
    name: 'Name',
    surname: 'Surname',
    subtitle: 'Subtitle'
  },
  link: {
    image: {
      logo: '/assets/images/jpg/logo.jpg',
      logoWhite: '/assets/images/png/logo-white.png',
      signature: '/assets/images/png/signature.png',
      profile: '/assets/images/jpg/profile.jpg'
    }
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
