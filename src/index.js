import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyles } from "./global-styles";
import { FirebaseContext } from "./context/firebase";

// import { seedDatabase } from "./seed";

const config = {
  apiKey: "AIzaSyC09MOYYb1Uw6dg12j7Zd5ZDdkBrdLjRtw",
  authDomain: "stacy-netflix-app.firebaseapp.com",
  databaseURL: "https://stacy-netflix-app-default-rtdb.firebaseio.com",
  projectId: "stacy-netflix-app",
  storageBucket: "stacy-netflix-app.appspot.com",
  messagingSenderId: "714230962799",
  appId: "1:714230962799:web:415ed87977a1c67c4f0b9a",
};

// Initialize Firebase
const firebase = window.firebase.initializeApp(config);
// seedDatabase(firebase); // one time for hydration of database

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase: window.firebase }}>
    <GlobalStyles />
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
