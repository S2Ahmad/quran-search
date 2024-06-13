import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDG1nha82K6k6CvY6z5-zkpQtRgYeuGP6Y",
    authDomain: "quran-search-82b16.firebaseapp.com",
    projectId: "quran-search-82b16",
    storageBucket: "quran-search-82b16.appspot.com",
    messagingSenderId: "182905995389",
    appId: "1:182905995389:web:9901e2ef99ee1c1424f114"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
