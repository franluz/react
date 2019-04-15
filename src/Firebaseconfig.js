const Rebase= require('re-base')
const firebase = require('firebase');

const FirebaseConfig = {
    apiKey: "AIzaSyCNz_JkGt6R72EdyiENIeypQXskSOp180Y",
    authDomain: "xomis-portifolio.firebaseapp.com",
    databaseURL: "https://xomis-portifolio.firebaseio.com",
    projectId: "xomis-portifolio",
    storageBucket: "xomis-portifolio.appspot.com",
    messagingSenderId: "882705952348"
  };

const app = firebase.initializeApp(FirebaseConfig);

const config = Rebase.createClass(app.database());
export const storage = app.storage();
export default config;