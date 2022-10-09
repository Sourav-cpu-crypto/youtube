import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpCy3PGXyfNgrDJZ3gjAJYl2yvsFSLaJI",
  authDomain: "video-fc4c1.firebaseapp.com",
  projectId: "video-fc4c1",
  storageBucket: "video-fc4c1.appspot.com",
  messagingSenderId: "307538158209",
  appId: "1:307538158209:web:c55478a3a433abdf3a6380"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
