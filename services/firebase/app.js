import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDgJtU-Iw5S4vZCPGjOh6gWVuZd-tO18qE',
  authDomain: 'pubus-status-beb24.firebaseapp.com',
  projectId: 'pubus-status-beb24',
  storageBucket: 'pubus-status-beb24.firebasestorage.app',
  messagingSenderId: '80545180616',
  appId: '1:80545180616:web:607ad610d4e4392d3aaefd',
};

const app = initializeApp(firebaseConfig);

export { app };
