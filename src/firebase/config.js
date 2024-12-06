import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyCGZd-wx32g3rL8-yJHa0jg-8akFDM7gew",
  authDomain: "entrega-react-5cb28.firebaseapp.com",
  projectId: "entrega-react-5cb28",
  storageBucket: "entrega-react-5cb28.firebasestorage.app",
  messagingSenderId: "874078696816",
  appId: "1:874078696816:web:28cf7b64868a91c68dcbb5",
  measurementId: "G-3SKSBZES6D"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

if (typeof window !== 'undefined') {
    isSupported().then((supported) => {
      if (supported) {
        getAnalytics(app);
        console.log('Firebase Analytics inicializado');
      } else {
        console.log('Firebase Analytics no es compatible en este entorno');
      }
    });
}

export { db, addDoc, collection };
