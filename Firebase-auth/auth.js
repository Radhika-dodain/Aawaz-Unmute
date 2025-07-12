 
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAOjJ_D8b2DgqbqaNkU3kIiT-xssAz20r4",
    authDomain: "awaaz-unmute.firebaseapp.com",
    projectId: "awaaz-unmute",
    storageBucket: "awaaz-unmute.firebasestorage.app",
    messagingSenderId: "906666541334",
    appId: "1:906666541334:web:7724fc51ec4c4c09c15037",
    measurementId: "G-VJ7GT7DW1T"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
