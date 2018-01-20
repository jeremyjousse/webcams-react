const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

var config = {
  apiKey: "AIzaSyBoTkXFK0CgvuMZa8fqYz_LF7khkPZsz-w",
  authDomain: "webcams-7ce48.firebaseapp.com",
  databaseURL: "https://webcams-7ce48.firebaseio.com",
  projectId: "webcams-7ce48",
  storageBucket: "webcams-7ce48.appspot.com",
  messagingSenderId: "860664255351"
};
firebase.initializeApp(config);
export var db = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
