import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

console.log(process.env.apiKey);
const firebaseConfig = {
    apiKey: "AIzaSyCDPMfVTkCYwuazEbr__uIBoY5cNQ-E7ic",
    authDomain: "sparrowmart-335c9.firebaseapp.com",
    projectId: "sparrowmart-335c9",
    storageBucket: "sparrowmart-335c9.appspot.com",
    messagingSenderId: "372069391289",
    appId: "1:372069391289:web:94b5cd8af96ecfe8aeb468"
};


const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account "
});

export const auth = getAuth(app);
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
