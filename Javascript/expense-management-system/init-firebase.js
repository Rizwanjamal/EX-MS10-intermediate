const firebaseConfig = {
  apiKey: "AIzaSyB2R8uN5qiADiUoyfundYNBWpfJ_EvbBTY",
  authDomain: "rj-expense-management-system.firebaseapp.com",
  projectId: "rj-expense-management-system",
  storageBucket: "rj-expense-management-system.appspot.com",
  messagingSenderId: "139552033177",
  appId: "1:139552033177:web:2df9298df9702034042b08"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAuth = firebaseApp.auth();
const firebaseDB = firebaseApp.firestore();