import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Question } from './../features/questions/model/question';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) {}

  // Méthode pour récupérer un document "questions" et ses sous-documents "reponses"
  getQuestionWithResponses(questionId: string): Observable<any> {
    // Récupérer le document "questions" avec l'ID fourni (ici Q1)
    return this.firestore.collection('questions').doc(questionId).snapshotChanges().pipe(
      switchMap(questionDoc => {
        if (!questionDoc.payload.exists) {
          throw new Error('Question not found');
        }

        // const questionData = Object.assign(questionDoc.payload.data());

        // Maintenant, récupérer les sous-documents de la collection "reponses" pour cette question
        return this.firestore.collection(`questions/${questionId}/reponses`).snapshotChanges().pipe(
          map(responseDocs => {
            const reponses = responseDocs.map(doc => {
             //  return { id: doc.payload.doc.id, ...doc.payload.doc.data() };
            });
            // return { ...questionData, reponses }; // Retourner la question avec ses réponses
          })
        );
      })
    );
  }
}
