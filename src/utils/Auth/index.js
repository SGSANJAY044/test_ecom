import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId
};


const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account "
});

export const auth = getAuth(app);
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
