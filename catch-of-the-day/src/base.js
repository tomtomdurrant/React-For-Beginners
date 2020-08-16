import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCPaj4Ln_XrQOgWtcDm2Vlzu6aS6U69Uo0",
  authDomain: "catch-of-the-day-tom-demo.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-tom-demo.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
