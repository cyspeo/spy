import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideRouter } from '@angular/router';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { routes } from './app.routes';
import { provideAuth, getAuth } from '@angular/fire/auth';

  // Initialize Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyDuGCBixo4l0IWCZTg2atikGxYTOYSHN1k",
  authDomain: "spy-etude.firebaseapp.com",
  projectId: "spy-etude",
  storageBucket: "spy-etude.appspot.com",
  messagingSenderId: "66854472746",
  appId: "1:66854472746:web:b5209b95f9d5790f84c753"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    // provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ]
};
