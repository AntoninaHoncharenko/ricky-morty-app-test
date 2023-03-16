import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAAWXpyk2NYK34X6Wx_SAr08R8vWplH2AQ',
  authDomain: 'authtest-6a692.firebaseapp.com',
  projectId: 'authtest-6a692',
  storageBucket: 'authtest-6a692.appspot.com',
  messagingSenderId: '394726693612',
  appId: '1:394726693612:web:6c81a6c968639d48f5e3c9',
};

export const app = initializeApp(firebaseConfig);

export const googleAuthProvider = new GoogleAuthProvider();
