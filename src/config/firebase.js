import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvcJuRoMLpapf0K7Dj8c8gFw3wglPAcj4",
  authDomain: "shoesafari-c8839.firebaseapp.com",
  projectId: "shoesafari-c8839",
  storageBucket: "shoesafari-c8839.firebasestorage.app",
  messagingSenderId: "862440806914",
  appId: "1:862440806914:web:0e944a8d2b17fee5fa251b"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);