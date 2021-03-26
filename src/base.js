import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAYiXjcIhashCQFuUWzBDGExNewsYo2RZ8",
    authDomain: "catch-of-the-day-jeff-liu.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-jeff-liu-default-rtdb.firebaseio.com",

  });

const base = Rebase.createClass(firebase.database());

//This is a named export
export {firebaseApp}

//This is a default export
export default base;