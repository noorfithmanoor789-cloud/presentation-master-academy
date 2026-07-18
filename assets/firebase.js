// ============================================================
// FIREBASE CONFIG - Presentation Master Academy
// ============================================================

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// ====== NEW FIREBASE CONFIG ======
const firebaseConfig = {
    apiKey: "AIzaSyAxWVwDL_hfcdTmkGPK8nOWZ2TTY40kFQA",
    authDomain: "presentation-master-acad-41afb.firebaseapp.com",
    projectId: "presentation-master-acad-41afb",
    storageBucket: "presentation-master-acad-41afb.firebasestorage.app",
    messagingSenderId: "267768109381",
    appId: "1:267768109381:web:a0ae370167491179f1062c",
    measurementId: "G-LTSDGCPHH4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log('✅ Firebase Connected Successfully!');
console.log('🏫 Presentation Master Academy');
console.log('📊 Project ID:', firebaseConfig.projectId);

export { app, db };