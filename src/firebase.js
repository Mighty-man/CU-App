import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyByT1dmQKkjUA0TMYXWeCsX8GiPwXUA33M",
    authDomain: "my-cu-project-dd092.firebaseapp.com",
    databaseURL: "https://my-cu-project-dd092.firebaseio.com",
    projectId: "my-cu-project-dd092",
    storageBucket: "my-cu-project-dd092.appspot.com",
    messagingSenderId: "635092705621"
  };
  firebase.initializeApp(config);
const auth = firebase.auth();
  export {auth}