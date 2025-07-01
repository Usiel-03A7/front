import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDnl4ah5ew4gjH7heN5kWLjJ1WUVn8dA9Y",
  authDomain: "assessment-font.firebaseapp.com",
  projectId: "assessment-font",
  storageBucket: "assessment-font.firebasestorage.app",
  messagingSenderId: "949017547933",
  appId: "1:949017547933:web:a3611a3c20eb9ca18f7074"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth, app }; 
