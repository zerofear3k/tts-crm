const firebaseConfig = {
  apiKey: "AIzaSyBXur7Lby4djKRwv4ClDawtss0qqp7o_zo",
  authDomain: "toronto-tree-services.firebaseapp.com",
  projectId: "toronto-tree-services",
  storageBucket: "toronto-tree-services.firebasestorage.app",
  messagingSenderId: "1086229039667",
  appId: "1:1086229039667:web:bbe1b5338fa2b6fcdcf146"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();