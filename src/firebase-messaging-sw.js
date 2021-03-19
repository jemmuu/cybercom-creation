importScripts('https://www.gstatic.com/firebasejs/8.3.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.0/firebase-messaging.js');


if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../firebase-messaging-sw.js')
      .then(function(registration) {
        console.log('Registration successful, scope is:', registration.scope);
      }).catch(function(err) {
        console.log('Service worker registration failed, error:', err);
      });
    } 

firebase.initializeApp({
    apiKey: "AIzaSyDo9S63EMq-RJa1INq-hor-3mvEoGkuI_0",
    authDomain: "employee-crud-e0939.firebaseapp.com",
    databaseURL: "https://employee-crud-e0939-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "employee-crud-e0939",
    storageBucket: "employee-crud-e0939.appspot.com", 
    messagingSenderId: "619533163288",
    appId: "1:619533163288:web:c9cc7a93ab24a8c3a61c6d",
    measurementId: "G-Q6F2962Y5C"
});
const messaging = firebase.messaging();