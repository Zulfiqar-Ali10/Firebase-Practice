
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC5BSQF4E_xuuTmMvL9M5wWdqevyGmzvz8",
  authDomain: "fir-app1-f1cdc.firebaseapp.com",
  projectId: "fir-app1-f1cdc",
  storageBucket: "fir-app1-f1cdc.firebasestorage.app",
  messagingSenderId: "73401587102",
  appId: "1:73401587102:web:fc7bd9fe37a4d4cb4f728f",
  databaseURL: "https://fir-app1-f1cdc-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);