// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDK5sWc2T8NQzQ3H9zd6MkElIDnkkl4NfY",
    authDomain: "todo-angular5.firebaseapp.com",
    databaseURL: "https://todo-angular5.firebaseio.com",
    projectId: "todo-angular5",
    storageBucket: "todo-angular5.appspot.com",
    messagingSenderId: "568824072619"
  }
};
