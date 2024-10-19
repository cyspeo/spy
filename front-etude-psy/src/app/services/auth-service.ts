import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {}

  // Connexion avec Email et Mot de passe
  login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password).then((userCredential: any) => {
      // Récupérer l'ID utilisateur
      const userId = userCredential.user?.uid;
      // Rechercher le rôle de l'utilisateur dans Firestore
      return this.firestore.collection('users').doc(userId).get().toPromise();
    });
  }
}
